import { NextRequest, NextResponse } from 'next/server';

// Разрешенные источники
const allowedOrigins = [
  'http://localhost:3000',
  process.env.NEXT_PUBLIC_APP_URL,
].filter(Boolean) as string[];

const API_BACKEND_URL = process.env.API_BACKEND_URL;

function getCorsHeaders(origin: string | null) {
  const isAllowed = origin && allowedOrigins.includes(origin);

  return {
    'Access-Control-Allow-Origin': isAllowed
      ? origin
      : allowedOrigins[0] || '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept',
      'Origin',
    ].join(', '),
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Max-Age': '86400', // 24 часа
  };
}

// Основная функция прокси
export function proxy(request: NextRequest) {
  const origin = request.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);

  // 1. Обработка preflight (OPTIONS) запросов
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Получаем путь без /api
    const apiPath = request.nextUrl.pathname.replace(/^\/api/, '');
    // Формируем URL для бэкенда
    const backendUrl = `${API_BACKEND_URL}${apiPath}${request.nextUrl.search}`;

    console.log(`[Proxy] Rewriting to: ${backendUrl}`);

    try {
      // Создаем ответ с перезаписью URL
      const response = NextResponse.rewrite(backendUrl);

      // Добавляем CORS заголовки к ответу
      Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
      });

      return response;
    } catch (error) {
      console.error('[Proxy] Error:', error);
      return NextResponse.json(
        { error: 'Proxy error', message: 'Failed to proxy request' },
        { status: 500, headers: corsHeaders }
      );
    }
  }

  // 3. Для всех остальных запросов просто продолжаем
  return NextResponse.next();
}

// Указываем, какие пути обрабатывать
export const config = {
  matcher: [
    '/api/:path*', // Все запросы к /api/*
  ],
};
