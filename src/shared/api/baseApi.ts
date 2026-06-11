import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Теперь запросы идут через прокси Next.js
const BASE_URL = '/api'; // 👈 Относительный путь, а не абсолютный URL

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // Добавляем токен из localStorage
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      headers.set('Content-Type', 'application/json');

      return headers;
    },
  }),
  tagTypes: ['User', 'Post', 'Auth'],
  endpoints: () => ({}),
});
