'use client';

import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  Divider,
} from '@/shared/ui/mui';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', mt: 'auto' }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* О нас */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              WingDing
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'grey.400' }}>
              Платформа для поиска и бронирования событий. Концерты, выставки, спорт и многое другое.
            </Typography>
          </Grid>

          {/* Быстрые ссылки */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Быстрые ссылки
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="grey.400" underline="hover">Главная</Link>
              <Link href="/events" color="grey.400" underline="hover">События</Link>
              <Link href="/about" color="grey.400" underline="hover">О нас</Link>
              <Link href="/contacts" color="grey.400" underline="hover">Контакты</Link>
            </Box>
          </Grid>

          {/* Пользователям */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Пользователям
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/how-it-works" color="grey.400" underline="hover">Как это работает</Link>
              <Link href="/faq" color="grey.400" underline="hover">FAQ</Link>
              <Link href="/terms" color="grey.400" underline="hover">Пользовательское соглашение</Link>
              <Link href="/privacy" color="grey.400" underline="hover">Политика конфиденциальности</Link>
            </Box>
          </Grid>

          {/* Контакты */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Контакты
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ fontSize: 20, color: 'grey.400' }} />
                <Typography variant="body2" color="grey.400">
                  г. Москва, ул. Testtest, 777788
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 20, color: 'grey.400' }} />
                <Typography variant="body2" color="grey.400">
                  +7 (999) 999-99-99
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: 20, color: 'grey.400' }} />
                <Typography variant="body2" color="grey.400">
                  myEmail
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'grey.700' }} />

        <Typography variant="body2" align="center" color="grey.500">
          © {currentYear} WingDing. Все права защищены.
        </Typography>
      </Container>
    </Box>
  );
};