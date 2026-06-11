'use client';

import { StoreProvider } from './StoreProvider';
import { SessionProvider } from './SessionProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <SessionProvider>{children}</SessionProvider>
    </StoreProvider>
  );
}
