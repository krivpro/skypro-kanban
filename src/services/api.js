import axios from 'axios';

const API_BASE_URL = 'https://wedev-api.sky.pro/api';

// Общий экземпляр axios для всех запросов
export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Установка / сброс токена авторизации
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

// Единая обработка ошибок API
export const handleApiError = (error) => {
  if (error.response) {
    const status = error.response.status;

    const backendMessage =
      error.response.data?.message || error.response.data?.error;

    // Если бэкенд вернул понятное сообщение — показываем его вместе с кодом
    if (backendMessage) {
      throw new Error(`Ошибка ${status}: ${backendMessage}`);
    }

    if (status === 400) {
      throw new Error('Ошибка 400: некорректные данные запроса.');
    }

    if (status === 401) {
      throw new Error('Ошибка 401: необходима авторизация. Пожалуйста, войдите в аккаунт.');
    }

    if (status === 404) {
      throw new Error('Ошибка 404: ресурс не найден.');
    }

    throw new Error(`Ошибка ${status}: проблема на сервере. Попробуйте позже.`);
  }

  throw new Error(error.message || 'Неизвестная ошибка. Попробуйте позже.');
};