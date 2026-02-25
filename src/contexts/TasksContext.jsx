import { createContext, useContext, useEffect, useState } from 'react';
import {
  getTasks as apiGetTasks,
  getTaskById as apiGetTaskById,
  createTask as apiCreateTask,
  updateTask as apiUpdateTask,
  deleteTask as apiDeleteTask,
} from '../services/tasks';

const TasksContext = createContext(null);

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('useTasks должен использоваться внутри TasksProvider');
  }

  return context;
};

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      setError('');

      const loadedTasks = await apiGetTasks();
      setTasks(loadedTasks || []);
    } catch (err) {
      setError(err.message || 'Не удалось загрузить задачи. Попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async (taskData) => {
    await apiCreateTask(taskData);
    await loadTasks();
  };

  const updateTask = async (id, taskData) => {
    await apiUpdateTask(id, taskData);
    await loadTasks();
  };

  const deleteTask = async (id) => {
    await apiDeleteTask(id);
    await loadTasks();
  };

  const getTaskById = async (id) => {
    const existingTask = tasks.find((task) => task.id === id);
    if (existingTask) {
      return existingTask;
    }
    return apiGetTaskById(id);
  };

  const value = {
    tasks,
    isLoading,
    error,
    loadTasks,
    createTask,
    updateTask,
    deleteTask,
    getTaskById,
  };

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
};

export default TasksContext;

