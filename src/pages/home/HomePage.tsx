'use client';

import { Box } from '@mui/material'
import { Header, EventsSection, Footer } from '@/features'
import type { Event } from '@/app/(pages)/types';

interface HomePageProps {
  initialEvents: Event[];
}

export const HomePage = ({ initialEvents }: HomePageProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ flex: 1 }}>
        <EventsSection events={initialEvents} />
      </Box>
      <Footer />
    </Box>
  );
};