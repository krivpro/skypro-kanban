import { api, handleApiError } from './api';

// Регистрация нового пользователя
export const registerUser = async ({ login, name, password }) => {
  try {
    // Это API не любит заголовок Content-Type: application/json,
    // поэтому явно переопределяем его на пустой
    const { data } = await api.post(
      '/user',
      {
        login,
        name,
        password,
      },
      {
        headers: {
          'Content-Type': '',
        },
      },
    );

    return data.user;
  } catch (error) {
    handleApiError(error);
  }
};

// Авторизация пользователя
export const loginUser = async ({ login, password }) => {
  try {
    const { data } = await api.post(
      '/user/login',
      {
        login,
        password,
      },
      {
        headers: {
          'Content-Type': '',
        },
      },
    );

    return data.user;
  } catch (error) {
    handleApiError(error);
  }
};

