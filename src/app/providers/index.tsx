'use client';

import { StoreProvider } from './StoreProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}