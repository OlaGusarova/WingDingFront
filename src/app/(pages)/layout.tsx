import type { Metadata } from 'next'
import { Providers } from '../providers'
import { ThemeProvider } from '../providers/ThemeProvider'
import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
import { Box, Container } from '@/shared/ui/mui'
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
      <body cz-shortcut-listen="true">
        <Providers>
          <ThemeProvider>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              <Container maxWidth="lg" sx={{ py: 2 }}>
                {children}
              </Container>
              <Footer />
            </Box>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
