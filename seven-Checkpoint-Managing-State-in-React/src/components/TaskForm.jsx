import React, { useState } from 'react';
import { Plus, Edit, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

const TaskForm = ({ 
  initialTask = { name: '', description: '' }, 
  onSubmit, 
  onCancel, 
  formError, 
  setFormError, 
  buttonText, 
  title 
}) => {
  const [task, setTask] = useState(initialTask);

  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (!task.name.trim() || !task.description.trim()) {
      setFormError('Both name and description are required.');
      return;
    }
    
    setFormError(null);
    onSubmit(task);
    
    if (!initialTask.id) {
      setTask({ name: '', description: '' });
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>
        {formError && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded flex items-center">
            <AlertCircle size={16} className="mr-2" />
            {formError}
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Task Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={task.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task name"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task description"
            rows="3"
          />
        </div>
        
        <div className="flex justify-end space-x-2">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
          )}
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
          >
            {initialTask.id ? <Edit size={16} className="mr-1" /> : <Plus size={16} className="mr-1" />}
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
