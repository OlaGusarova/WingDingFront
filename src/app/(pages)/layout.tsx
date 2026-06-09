import type { Metadata } from 'next'
import { Providers } from '../providers'
import { ThemeProvider } from '../providers/ThemeProvider'
import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
import { Box } from '@mui/material'
import '../globals.css';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Created with Next.js 16 + Redux Toolkit + FSD',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <ThemeProvider>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              {children}
              <Footer />
            </Box>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
