import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useWeb3React } from '@web3-react/core';

interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  confidence: number;
}

interface Task {
  id: string;
  imageUrl: string;
  status: 'pending' | 'in_progress' | 'completed';
  difficulty: 'easy' | 'medium' | 'hard';
  reward: number;
  boundingBoxes: BoundingBox[];
}

const TaskDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { account } = useWeb3React();
  const queryClient = useQueryClient();
  const [editingBox, setEditingBox] = useState<BoundingBox | null>(null);

  const { data: task, isLoading } = useQuery<Task>(
    ['task', id],
    async () => {
      const response = await axios.get(`/api/tasks/${id}`);
      return response.data;
    }
  );

  const updateTaskMutation = useMutation(
    async (updatedBoxes: BoundingBox[]) => {
      const response = await axios.put(`/api/tasks/${id}`, {
        boundingBoxes: updatedBoxes,
        walletAddress: account,
      });
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['task', id]);
      },
    }
  );

  const handleBoxClick = (box: BoundingBox) => {
    setEditingBox(box);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (editingBox) {
      setEditingBox({ ...editingBox, text: e.target.value });
    }
  };

  const handleSave = () => {
    if (editingBox && task) {
      const updatedBoxes = task.boundingBoxes.map((box) =>
        box === editingBox ? editingBox : box
      );
      updateTaskMutation.mutate(updatedBoxes);
      setEditingBox(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Task #{id}</h1>
        <div className="flex space-x-4">
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full ${
              task.status === 'completed'
                ? 'bg-green-100 text-green-800'
                : task.status === 'in_progress'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-blue-100 text-blue-800'
            }`}
          >
            {task.status.replace('_', ' ')}
          </span>
          <span className="text-sm font-medium text-gray-500">
            Reward: {task.reward} tokens
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative">
          <img
            src={task.imageUrl}
            alt="OCR task"
            className="w-full rounded-lg shadow-lg"
          />
          {task.boundingBoxes.map((box, index) => (
            <div
              key={index}
              className="absolute border-2 border-blue-500 cursor-pointer hover:border-blue-700"
              style={{
                left: `${box.x}%`,
                top: `${box.y}%`,
                width: `${box.width}%`,
                height: `${box.height}%`,
              }}
              onClick={() => handleBoxClick(box)}
            >
              <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                {box.text}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Edit Text</h2>
          {editingBox ? (
            <div className="space-y-4">
              <textarea
                value={editingBox.text}
                onChange={handleTextChange}
                className="w-full h-32 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter corrected text..."
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setEditingBox(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">
              Click on a text box in the image to edit its content.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetail; 