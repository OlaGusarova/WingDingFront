'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  setUser,
  setTempId,
  selectUserId,
  selectUser,
  useGetUserQuery,
} from '@/entities/user';

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  const existingUser = useAppSelector(selectUser);

  useEffect(() => {
    // 1. Восстанавливаем реального пользователя из localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        dispatch(setUser(user));
        return;
      } catch (e) {
        console.error('Failed to parse stored user', e);
      }
    }

    // 2. Если нет сохранённого пользователя – используем временный ID из env (только для разработки)
    const tempUserId = process.env.NEXT_PUBLIC_TEMP_USER_ID;
    console.log('🔍 tempUserId из env:', tempUserId);
    if (tempUserId && process.env.NODE_ENV === 'development') {
      dispatch(setTempId(tempUserId));
      console.log('✅ tempId установлен в слайс:', tempUserId);
    }
  }, [dispatch]);

  const { data: userData } = useGetUserQuery(userId as string, {
    skip: !userId || !!existingUser?.displayName, // пропускаем, если уже есть
  });

  // 3. При получении данных – сохраняем в слайс
  useEffect(() => {
    if (userData && !existingUser?.displayName) {
      dispatch(setUser(userData));
      console.log('✅ Пользователь загружен через RTK Query');
    }
  }, [userData, dispatch, existingUser]);

  return <>{children}</>;
}
