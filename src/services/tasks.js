import { api, handleApiError } from './api';

// Получить список задач
export const getTasks = async () => {
  try {
    const { data } = await api.get('/kanban');
    return data.tasks;
  } catch (error) {
    handleApiError(error);
  }
};

// Получить задачу по id
export const getTaskById = async (id) => {
  try {
    const { data } = await api.get(`/kanban/${id}`);
    return data.task;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('Задача не найдена.');
    }

    handleApiError(error);
  }
};

// Создать новую задачу
export const createTask = async (task) => {
  try {
    const { data } = await api.post('/kanban', task);
    return data.tasks;
  } catch (error) {
    handleApiError(error);
  }
};

// Обновить задачу
export const updateTask = async (id, task) => {
  try {
    const { data } = await api.put(`/kanban/${id}`, task);
    return data.tasks;
  } catch (error) {
    handleApiError(error);
  }
};

// Удалить задачу
export const deleteTask = async (id) => {
  try {
    const { data } = await api.delete(`/kanban/${id}`);
    return data.tasks;
  } catch (error) {
    handleApiError(error);
  }
};