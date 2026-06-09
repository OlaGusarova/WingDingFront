'use client';

import { useUpdateAvatarMutation } from '@/entities/user'
import { Button } from '@/shared/ui/mui'

const testId = 'd5e5cc54-8ac0-4c4c-91b6-e5e08f500e88'

const AvatarUpload = () => {
  const [updateAvatar, { isLoading }] = useUpdateAvatarMutation()

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
      await updateAvatar(formData).unwrap();
      alert('Аватар успешно обновлен!');
    } catch (error) {
      console.error('Ошибка загрузки:', error);
    }
  };

  return (
    <Button variant="contained" component="label">
      Загрузить аватар
      <input type="file" hidden accept="image/jpeg, image/png, image/gif" onChange={handleFileChange} disabled={isLoading} />
    </Button>
  )
}

export default AvatarUpload