'use client';

import { Button, TextField, Card, CardContent, Typography } from '@/shared/ui/mui'

export const LoginForm = () => {
  return (
    <Card className="max-w-md mx-auto mt-10 shadow-lg">
      <CardContent>
        <Typography variant="h5" className="mb-4 text-center">
          Вход в систему
        </Typography>
        
        <div className="space-y-4">
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
          />
          
          <TextField
            fullWidth
            label="Пароль"
            type="password"
            variant="outlined"
          />
          
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={() => console.log('login')}
            className="mt-2"
          >
            Войти
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}