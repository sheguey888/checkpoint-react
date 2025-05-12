import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import DeleteConfirmation from './DeleteConfirmation';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [formError, setFormError] = useState(null);
  
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    setTaskToDelete(null);
  };
  
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    setEditingTask(null);
  };
  
  const startEditing = (task) => {
    setEditingTask(task);
  };
  
  const cancelEditing = () => {
    setEditingTask(null);
    setFormError(null);
  };
  
  const confirmDelete = (task) => {
    setTaskToDelete(task);
  };
  
  const cancelDelete = () => {
    setTaskToDelete(null);
  };

  return (
    <div className="flex flex-col items-center w-full bg-gray-100 p-4">
      <div className="w-full  bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 p-4 text-white">
          <h1 className="text-2xl font-bold">To-Do List</h1>
        </div>
        
        <div className="p-4 border-b">
          {editingTask ? (
            <TaskForm 
              initialTask={editingTask} 
              onSubmit={updateTask} 
              onCancel={cancelEditing}
              formError={formError}
              setFormError={setFormError}
              buttonText="Update Task"
              title="Edit Task"
            />
          ) : (
            <TaskForm 
              onSubmit={addTask} 
              formError={formError}
              setFormError={setFormError}
              buttonText="Add Task"
              title="New Task"
            />
          )}
        </div>
        
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Your Tasks</h2>
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No tasks yet. Add one above!</p>
          ) : (
            <ul className="space-y-2">
              {tasks.map(task => (
                <TaskItem 
                  key={task.id} 
                  task={task} 
                  onToggle={toggleTaskCompletion}
                  onEdit={startEditing}
                  onDelete={confirmDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
      
      {taskToDelete && (
        <DeleteConfirmation 
          task={taskToDelete}
          onConfirm={() => deleteTask(taskToDelete.id)}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default TodoApp;
