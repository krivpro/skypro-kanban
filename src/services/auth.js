import { api, handleApiError } from './api';

// Регистрация нового пользователя
export const registerUser = async ({ login, name, password }) => {
  try {
    const { data } = await api.post('/user', {
      login,
      name,
      password,
    });

    return data.user;
  } catch (error) {
    if (error.response?.status === 400) {
      throw new Error('Пользователь с таким логином уже существует.');
    }

    handleApiError(error);
  }
};

// Авторизация пользователя
export const loginUser = async ({ login, password }) => {
  try {
    const { data } = await api.post('/user/login', {
      login,
      password,
    });

    return data.user;
  } catch (error) {
    if (error.response?.status === 400) {
      throw new Error('Неверный логин или пароль.');
    }

    handleApiError(error);
  }
};

