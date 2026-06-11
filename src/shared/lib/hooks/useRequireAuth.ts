'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/app/store/hooks';
import { selectUser } from '@/entities/user';

interface UseRequireAuthOptions {
  redirectTo?: string; // куда редиректить, если нет пользователя
  loadingComponent?: React.ReactNode; // можно показать лоадер, пока проверяем
}

export const useRequireAuth = (options: UseRequireAuthOptions = {}) => {
  const { redirectTo = '/' } = options;
  const router = useRouter();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (!user) {
      router.replace(redirectTo);
    }
  }, [user, router, redirectTo]);

  return { user, isAuthenticated: !!user };
};
