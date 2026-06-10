'use client';

import { useUploadAvatarMutation } from '@/entities/user'
import {
  IconButton,
  Typography
} from '@/shared/ui/mui'
import {
  Add as AddIcon,
} from '@mui/icons-material'

const testId = 'd5e5cc54-8ac0-4c4c-91b6-e5e08f500e88'

const AvatarUpload = () => {
  const [uploadAvatar, { isLoading }] = useUploadAvatarMutation()

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Создаем FormData и добавляем в него файл
    const formData = new FormData();
    formData.append('Avatar', file);
    formData.append('UserId', testId)
    formData.append('IsDefault', String(true))
    formData.append('IsActive', String(true))

    // Отправляем на сервер
    try {
      await uploadAvatar(formData).unwrap();
      alert('Аватар успешно обновлен!');
    } catch (error) {
      console.error('Ошибка загрузки:', error);
    }
  };

  return (
    <>
      <IconButton
        component='label' 
        size="large"
        sx={{
          backgroundColor: 'primary.main',
          width: 64,
          height: 64,
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        <AddIcon sx={{ fontSize: 32 }} />
        <input type="file" hidden accept="image/jpeg, image/png, image/gif" onChange={handleFileChange} disabled={isLoading} />
      </IconButton>
      <Typography
        variant="body2"
        sx={{ mt: 2, color: 'text.secondary', fontWeight: 500 }}
      >
        Загрузить аватар
      </Typography>
    </>
  )
}

export default AvatarUpload