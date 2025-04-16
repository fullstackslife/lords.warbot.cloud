# OCR Training Scripts

This directory contains scripts for training and improving the OCR model using verified tasks.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
export API_URL=http://localhost:3001
export MODEL_PATH=models/ocr
export EPOCHS=3
export BATCH_SIZE=8
```

## Usage

Run the retraining script:
```bash
python retrain.py
```

The script will:
1. Fetch verified tasks from the API
2. Prepare training data
3. Train the model
4. Evaluate performance
5. Deploy the new model version

## Model Architecture

The OCR model is based on the TrOCR (Transformer-based OCR) architecture:
- Uses VisionEncoderDecoderModel from Hugging Face
- Pre-trained on handwritten text
- Fine-tuned on verified tasks

## Training Process

1. Data Collection:
   - Fetches verified tasks from the API
   - Extracts images and text from bounding boxes
   - Splits data into train/test sets

2. Model Training:
   - Uses AdamW optimizer
   - Cross-entropy loss
   - Learning rate: 5e-5
   - Batch size: 8 (configurable)
   - Epochs: 3 (configurable)

3. Evaluation:
   - Calculates accuracy on test set
   - Reports performance metrics

4. Deployment:
   - Saves model to specified path
   - Notifies API of new version
   - Updates task metadata 