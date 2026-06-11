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
import { links } from './constants';

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
          {links.map((linkBlock) => (
            <Grid key={linkBlock.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 'semibold', mb: 1 }}
              >
                {linkBlock.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {linkBlock.links.map((linkInfo) => (
                  <Link
                    key={linkInfo.title}
                    href={linkInfo.link}
                    color="grey.600"
                    underline="hover"
                    variant="body2"
                  >
                    {linkInfo.title}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}

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
