import { Box } from '@mui/material'
import { EventsSection } from '@/features'
import { getEvents } from '@/pages/home/api/getEvents';


export default async function HomePage() {
  const events = await getEvents();
  return (
    <Box sx={{ flex: 1 }}>
      <EventsSection events={events} />
    </Box>
  );
};