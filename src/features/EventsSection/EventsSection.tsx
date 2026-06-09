'use client';

import {
  Typography,
  Grid,
  Skeleton
} from '@/shared/ui/mui';
import { EventSection } from '@/shared';
import { Event } from '@/app/(pages)/types';

interface EventsSectionProps {
  events: Event[];
  loading?: boolean;
}

export const EventsSection = ({ events, loading = false }: EventsSectionProps) => {

  const renderHeader = () => (
    <Typography 
      variant='h4' 
      sx={{
        my: 6,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
      }}
    >
      Предстоящие события
    </Typography>
  )

  if (loading) {
    return (
      <>
        {renderHeader()}
        <Grid container spacing={4}>
          {[1, 2, 3, 4].map((i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }

  return (
    <>
      {renderHeader()}
      <Grid container spacing={4}>
        {events.map((event: Event) => 
          <EventSection
            key={event.id}
            event={event}
          />
        )}
      </Grid>
    </>
  );
};