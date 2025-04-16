import os
import json
import requests
import numpy as np
from PIL import Image
import torch
from torch.utils.data import Dataset, DataLoader
from transformers import TrOCRProcessor, VisionEncoderDecoderModel
from sklearn.model_selection import train_test_split
from tqdm import tqdm

class OCRDataset(Dataset):
    def __init__(self, processor, images, texts):
        self.processor = processor
        self.images = images
        self.texts = texts

    def __len__(self):
        return len(self.images)

    def __getitem__(self, idx):
        image = self.images[idx]
        text = self.texts[idx]
        
        pixel_values = self.processor(image, return_tensors="pt").pixel_values
        labels = self.processor.tokenizer(text, 
                                        padding="max_length", 
                                        max_length=64,
                                        return_tensors="pt").input_ids
        
        return {
            "pixel_values": pixel_values.squeeze(),
            "labels": labels.squeeze()
        }

def fetch_verified_tasks(api_url):
    """Fetch verified tasks from the API"""
    response = requests.get(f"{api_url}/api/tasks?status=VERIFIED")
    return response.json()

def load_image(image_url):
    """Load image from URL"""
    response = requests.get(image_url, stream=True)
    return Image.open(response.raw)

def prepare_training_data(tasks):
    """Prepare training data from verified tasks"""
    images = []
    texts = []
    
    for task in tqdm(tasks, desc="Preparing training data"):
        try:
            image = load_image(task['imageUrl'])
            for box in task['boundingBoxes']:
                # Crop image to bounding box
                x, y, w, h = box['x'], box['y'], box['width'], box['height']
                cropped = image.crop((x, y, x + w, y + h))
                
                images.append(cropped)
                texts.append(box['text'])
        except Exception as e:
            print(f"Error processing task {task['id']}: {str(e)}")
    
    return images, texts

def train_model(images, texts, model_path, epochs=3, batch_size=8):
    """Train the OCR model"""
    # Initialize processor and model
    processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten")
    model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")
    
    # Create dataset and dataloader
    dataset = OCRDataset(processor, images, texts)
    train_loader = DataLoader(dataset, batch_size=batch_size, shuffle=True)
    
    # Training setup
    optimizer = torch.optim.AdamW(model.parameters(), lr=5e-5)
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model.to(device)
    
    # Training loop
    model.train()
    for epoch in range(epochs):
        total_loss = 0
        for batch in tqdm(train_loader, desc=f"Epoch {epoch + 1}/{epochs}"):
            pixel_values = batch["pixel_values"].to(device)
            labels = batch["labels"].to(device)
            
            outputs = model(pixel_values=pixel_values, labels=labels)
            loss = outputs.loss
            
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
            
            total_loss += loss.item()
        
        print(f"Epoch {epoch + 1} Loss: {total_loss / len(train_loader)}")
    
    # Save model
    model.save_pretrained(model_path)
    processor.save_pretrained(model_path)
    
    return model, processor

def evaluate_model(model, processor, test_images, test_texts):
    """Evaluate model performance"""
    model.eval()
    correct = 0
    total = 0
    
    for image, text in tqdm(zip(test_images, test_texts), desc="Evaluating"):
        pixel_values = processor(image, return_tensors="pt").pixel_values
        generated_ids = model.generate(pixel_values)
        generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
        
        if generated_text == text:
            correct += 1
        total += 1
    
    accuracy = correct / total
    print(f"Model Accuracy: {accuracy:.2%}")
    return accuracy

def main():
    # Configuration
    API_URL = os.getenv("API_URL", "http://localhost:3001")
    MODEL_PATH = os.getenv("MODEL_PATH", "models/ocr")
    EPOCHS = int(os.getenv("EPOCHS", "3"))
    BATCH_SIZE = int(os.getenv("BATCH_SIZE", "8"))
    
    # Fetch verified tasks
    print("Fetching verified tasks...")
    tasks = fetch_verified_tasks(API_URL)
    
    if not tasks:
        print("No verified tasks found. Exiting.")
        return
    
    # Prepare training data
    print("Preparing training data...")
    images, texts = prepare_training_data(tasks)
    
    # Split into train and test sets
    train_images, test_images, train_texts, test_texts = train_test_split(
        images, texts, test_size=0.2, random_state=42
    )
    
    # Train model
    print("Training model...")
    model, processor = train_model(
        train_images, 
        train_texts, 
        MODEL_PATH,
        epochs=EPOCHS,
        batch_size=BATCH_SIZE
    )
    
    # Evaluate model
    print("Evaluating model...")
    accuracy = evaluate_model(model, processor, test_images, test_texts)
    
    # Notify API of new model version
    model_version = f"v{len(os.listdir(MODEL_PATH)) + 1}"
    response = requests.post(
        f"{API_URL}/api/webhooks/deploy",
        json={
            "modelVersion": model_version,
            "accuracy": accuracy * 100,
            "tasksUsed": [task["id"] for task in tasks]
        }
    )
    
    if response.status_code == 200:
        print(f"Model {model_version} deployed successfully with accuracy {accuracy:.2%}")
    else:
        print("Failed to notify API of model deployment")

if __name__ == "__main__":
    main() 