'use client';

import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip
} from '@/shared/ui/mui';
import Image from 'next/image'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Event } from '@/app/(pages)/types';
import dateParse from '../lib/dateParse';

interface IEvent { event: Event}
type colorsType = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'

export const EventSection = ({ event }: IEvent) => {
  const formatDate = (dateString: string) => {
    return dateParse(dateString, 'd MMMM YYYY, HH:mm');
  }
 
  const getCategoryColor = (category: Event['category']) => {
    const colors = {
      concert: 'error',
      exhibition: 'info',
      sport: 'success',
      education: 'warning',
    };
    return colors[category] as colorsType;
  };

  const getCategoryLabel = (category: Event['category']) => {
    const labels = {
      concert: 'Концерт',
      exhibition: 'Выставка',
      sport: 'Спорт',
      education: 'Образование',
    };
    return labels[category];
  };

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={event.id}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            boxShadow: 3,
          },
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden' }}>
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip label={getCategoryLabel(event.category)} color={getCategoryColor(event.category)} size="small" />
            {event.isFree && <Chip label="Бесплатно" color="success" size="small" />}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            {event.title}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            {event.description}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <CalendarTodayIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {formatDate(event.date)}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOnIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {event.location}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <AttachMoneyIcon sx={{ fontSize: 20, color: 'secondary.main' }} />
            <Typography variant="h6">
              {event.isFree ? 'Бесплатно' : `${event.price} ₽`}
            </Typography>
          </Box>
        </CardContent>

        {/* <CardActions sx={{ p: 2, pt: 0 }}>
          <Button fullWidth variant="contained" color='info'>
            Участвовать
          </Button>
        </CardActions> */}
      </Card>
    </Grid>
  )
}