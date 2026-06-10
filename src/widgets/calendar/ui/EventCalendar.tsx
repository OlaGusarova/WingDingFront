'use client';

import * as React from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickerDay, PickerDayProps } from '@mui/x-date-pickers/PickerDay';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Badge, Popper, Paper, Typography } from '@mui/material';
import { isSameDay } from 'date-fns';
import dateParse from '@/shared/lib/dateParse';
import type { Event } from '@/app/(pages)/types'

interface CustomDayProps extends PickerDayProps {
  eventsOnDate?: Event[];
}

const CustomDay = (props: CustomDayProps) => {
  const { eventsOnDate = [], day, ...other } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (eventsOnDate.length === 0) return;
    setAnchorEl(event.currentTarget);
  };
  const handleMouseLeave = () => setAnchorEl(null);

  const hasEvents = eventsOnDate.length > 0;

  return (
    <>
      <Badge
        variant="dot"
        color="error"
        overlap="circular"
        invisible={!hasEvents}
      >
        <PickerDay
          {...other}
          day={day}
          onMouseEnter={hasEvents ? handleMouseEnter : undefined}
          onMouseLeave={hasEvents ? handleMouseLeave : undefined}
        />
      </Badge>
      {hasEvents && (
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          placement="top"
          sx={{ zIndex: 1300 }}
        >
          <Paper sx={{ p: 1.5, maxWidth: 250 }}>
            {eventsOnDate.map(event => (
              <Typography key={event.id} variant="body2">
                <strong>{event.title}</strong> {event.date && <>в {dateParse(event.date, 'HH:mm')}</>}
              </Typography>
            ))}
          </Paper>
        </Popper>
      )}
    </>
  );
};

interface EventCalendarProps {
  events: Event[];
}

const EventCalendar = ({ events }: EventCalendarProps) => {
  const getEventsForDay = (day: Date) => {
    return events.filter(event => isSameDay(event.date, day));
  };

  return (
    <div className='bg-white rounded-lg p-4 flex'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar
          sx={{ maxWidth: '100%' }}
          slots={{
            day: (dayProps) => (
              <CustomDay
                {...dayProps}
                eventsOnDate={getEventsForDay(dayProps.day)}
              />
            ),
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default EventCalendar