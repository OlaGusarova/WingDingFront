'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Подключаем шрифт (опционально, но красиво)
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Создаем тему с поддержкой кастомных переменных
const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  // Здесь можно переопределять компоненты и палитру
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Отключаем uppercase у кнопок
        },
      },
    },
  },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true, key: 'mui' }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
}