import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Task {
  id: string;
  imageUrl: string;
  status: 'pending' | 'in_progress' | 'completed';
  difficulty: 'easy' | 'medium' | 'hard';
  reward: number;
}

const TaskList: React.FC = () => {
  const { data: tasks, isLoading, error } = useQuery<Task[]>('tasks', async () => {
    const response = await axios.get('/api/tasks');
    return response.data;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error loading tasks. Please try again later.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Available Tasks</h1>
        <div className="flex space-x-4">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks?.map((task) => (
          <Link
            key={task.id}
            to={`/task/${task.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-4">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
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
                  {task.reward} tokens
                </span>
              </div>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={task.imageUrl}
                  alt="OCR task"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between items-center">
                <span
                  className={`text-sm font-medium ${
                    task.difficulty === 'easy'
                      ? 'text-green-600'
                      : task.difficulty === 'medium'
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }`}
                >
                  {task.difficulty}
                </span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Details →
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TaskList; 