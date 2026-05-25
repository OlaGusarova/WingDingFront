'use client';

import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
  Rating,
  Skeleton,
} from '@/shared/ui/mui';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Event } from '@/app/(pages)/types';

interface EventsSectionProps {
  events: Event[];
  loading?: boolean;
}

export const EventsSection = ({ events, loading = false }: EventsSectionProps) => {
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'd MMMM yyyy, HH:mm', { locale: ru });
  };

  const getCategoryColor = (category: Event['category']) => {
    const colors = {
      concert: 'error',
      exhibition: 'primary',
      sport: 'success',
      education: 'warning',
    };
    return colors[category];
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

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
       <Typography 
        variant="h4" 
        sx={{ 
          textAlign: 'center', 
          mb: 6,
          fontWeight: 'bold' 
        }}
      >
        Предстоящие события
      </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3, 4].map((i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography 
        variant="h4" 
        sx={{ 
          textAlign: 'center', 
          mb: 6,
          fontWeight: 'bold' 
        }}
      >
        Предстоящие события
      </Typography>

      <Grid container spacing={4}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia component="img" height="200" image={event.image} alt={event.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>  {/* ← все стили в sx */}
                  <Chip label={event.category} size="small" />
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
                  <AttachMoneyIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                  <Typography variant="h6" color="primary.main" fontWeight="bold">
                    {event.isFree ? 'Бесплатно' : `${event.price} ₽`}
                  </Typography>
                </Box>
              </CardContent>

              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button fullWidth variant="contained" color="primary">
                  Забронировать
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};