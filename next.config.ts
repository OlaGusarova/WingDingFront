import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Настройки Turbopack для FSD структуры
  turbopack: {
    resolveAlias: {
      '@': './src',  // Алиас для импортов
    },
    // Если нужно расширить расширения файлов
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  
  // Другие настройки Next.js
  images: {
    domains: [], // Добавьте свои домены при необходимости
  },
};

export default nextConfig;