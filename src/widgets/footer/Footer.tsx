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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{ bgcolor: 'grey.100', color: 'grey.900', mt: 'auto' }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* О нас */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              WingDing Party
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'grey.600' }}>
              Платформа для организации тематических встреч, знакомств по
              интересам и общения в рамках закрытого клубного сообщества
            </Typography>
          </Grid>

          {/* Быстрые ссылки */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 'semibold', mb: 1 }}
            >
              Быстрые ссылки
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="grey.600" underline="hover" variant="body2">
                Главная
              </Link>
              <Link
                href="/events"
                color="grey.600"
                underline="hover"
                variant="body2"
              >
                События
              </Link>
              <Link
                href="/about"
                color="grey.600"
                underline="hover"
                variant="body2"
              >
                О нас
              </Link>
              <Link
                href="/contacts"
                color="grey.600"
                underline="hover"
                variant="body2"
              >
                Контакты
              </Link>
            </Box>
          </Grid>

          {/* Пользователям */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 'semibold', mb: 1 }}
            >
              Пользователям
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                href="/how-it-works"
                color="grey.600"
                underline="hover"
                variant="body2"
              >
                Как это работает
              </Link>
              <Link
                href="/faq"
                color="grey.600"
                underline="hover"
                variant="body2"
              >
                FAQ
              </Link>
              <Link
                href="/terms"
                color="grey.600"
                underline="hover"
                variant="body2"
              >
                Пользовательское соглашение
              </Link>
              <Link
                href="/privacy"
                color="grey.600"
                underline="hover"
                variant="body2"
              >
                Политика конфиденциальности
              </Link>
            </Box>
          </Grid>

          {/* Контакты */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 'semibold', mb: 1 }}
            >
              Контакты
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ fontSize: 20, color: 'grey.600' }} />
                <Typography variant="body2" color="grey.600">
                  г. Москва, ул. Testtest, 777788
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 20, color: 'grey.600' }} />
                <Typography variant="body2" color="grey.600">
                  +7 (999) 999-99-99
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: 20, color: 'grey.600' }} />
                <Typography variant="body2" color="grey.600">
                  myEmail
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'grey.150' }} />

        <Typography variant="body2" align="center" color="grey.500">
          © {currentYear} WingDing Party. Все права защищены.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
