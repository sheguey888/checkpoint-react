import React from 'react';
import { CheckCircle, Circle, Edit, Trash2 } from 'lucide-react';

/**
 * TaskItem component for rendering individual tasks
 * @param {Object} task - The task object to render
 * @param {Function} onToggle - Function to toggle completion status
 * @param {Function} onEdit - Function to enter edit mode for this task
 * @param {Function} onDelete - Function to confirm deletion of this task
 */
const TaskItem = ({ task, onToggle, onEdit, onDelete }) => {
  return (
    <li className={`p-3 border rounded flex items-start ${task.completed ? 'bg-gray-50' : 'bg-white'}`}>
      <button 
        onClick={() => onToggle(task.id)}
        className="mt-1 mr-3 text-blue-600 hover:text-blue-800"
        aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {task.completed ? <CheckCircle size={20} /> : <Circle size={20} />}
      </button>
      
      <div className="flex-1">
        <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task.name}
        </h3>
        <p className={`text-sm mt-1 ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>
          {task.description}
        </p>
      </div>
      
      <div className="flex space-x-1 ml-2">
        <button
          onClick={() => onEdit(task)}
          className="text-gray-500 hover:text-blue-600 p-1"
          aria-label="Edit task"
        >
          <Edit size={16} />
        </button>
        <button
          onClick={() => onDelete(task)}
          className="text-gray-500 hover:text-red-600 p-1"
          aria-label="Delete task"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;