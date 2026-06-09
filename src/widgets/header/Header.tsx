'use client';

import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar
} from '@/shared/ui/mui'
import MenuIcon from '@mui/icons-material/Menu'
import { useRouter, usePathname } from 'next/navigation'
import { useGetUserQuery } from '@/entities/user'

const testId = 'd5e5cc54-8ac0-4c4c-91b6-e5e08f500e88'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [mobileAnchorEl, setMobileAnchorEl] = useState<null | HTMLElement>(null)

  const { data: user, isLoading, error } = useGetUserQuery(testId)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null)
  };

  const navigateTo = (path: string) => {
    router.push(path)
    handleMenuClose()
    handleMobileMenuClose()
  }

  const menuItems = [
    { label: 'События', path: '/events' },
    { label: 'О нас', path: '/about' },
    { label: 'Контакты', path: '/contacts' },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Логотип */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: { xs: 1, md: 0 } }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
              }}
            >
              WingDing Party
            </Typography>
          </Box>

          {/* Мобильное меню */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={(e) => setMobileAnchorEl(e.currentTarget)} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileAnchorEl}
              open={Boolean(mobileAnchorEl)}
              onClose={() => setMobileAnchorEl(null)}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.path} sx={{ textTransform: 'uppercase' }} onClick={() => navigateTo(item.path)}>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Десктопное меню */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => navigateTo(item.path)}
                sx={{
                  mx: 1,
                  color: 'text.primary',
                  fontWeight: pathname === item.path ? 600 : 400,
                  textTransform: 'uppercase'
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Правая часть */}
          <Box sx={{ flexGrow: 0 }}>
            {user?.displayName ? (
              <>
                <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ p: 0 }}>
                  <Avatar alt={user.displayName} />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                  <MenuItem onClick={() => navigateTo('/profile')}>Личный кабинет</MenuItem>
                  <MenuItem onClick={() => navigateTo('/my-events')}>Мои события</MenuItem>
                </Menu>
              </>
            ) : (
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button color="primary" onClick={() => navigateTo('/auth/login')}>
                  Вход
                </Button>
                <Button variant="contained" color="primary" onClick={() => navigateTo('/auth/register')}>
                  Регистрация
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header