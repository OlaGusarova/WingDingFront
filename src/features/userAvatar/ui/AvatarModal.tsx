'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Box,
  Alert,
  Avatar,
  Button
} from '@mui/material';
import { useAppSelector } from '@/app/store/hooks'
import { selectUser } from '@/entities/user'
import AvatarUpload from './AvatarUpload'

interface AvatarModalProps {
  open: boolean;
  onClose: () => void;
}

const AvatarModal = ({ open, onClose }: AvatarModalProps) => {
  const user = useAppSelector(selectUser)

  const avatars = user.avatars

  // const handleSelectAvatar = async (avatarId: number) => {
  //   try {
  //     await setAvatar({ avatarId }).unwrap();
  //     onClose();
  //   } catch (err) {
  //     console.error('Не удалось установить аватар', err);
  //   }
  // };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        {avatars && avatars.length === 0 && (
          <Alert severity="info" sx={{ mt: 2 }}>
            У вас пока нет загруженных аватаров.
          </Alert>
        )}
        {avatars && avatars.length > 0 && (
          <Grid container spacing={4} sx={{ mb: 2 }}>
            {avatars.map((avatar) => (
              <Grid size={{ xs: 4 }} key={avatar.avatarId}>
                <Box
                  // onClick={() => handleSelectAvatar(avatar.avatarId)}
                  sx={{
                    cursor: 'pointer',
                    position: 'relative',
                    border: '1px dashed #ddd',
                    borderRadius: 2,
                    p: 2,
                    transition: 'transform 0.2s',
                  }}
                >
                  <Avatar
                    src={avatar.avatarUri}
                    alt="Avatar"
                    sx={{ width: '100%', height: 'auto', aspectRatio: '1 / 1' }}
                  />
                  {avatar.isDefault && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderRadius: '50%',
                        width: 32,
                        height: 32,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 14,
                      }}
                    >
                      ✓
                    </Box>
                  )}
                  <div className='flex justify-between mt-2'>
                    <Button disabled={avatar.isDefault}>Аватар по умолчанию</Button>
                    <Button color='error'>Удалить</Button>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
        <AvatarUpload />
      </DialogContent>
    </Dialog>
  );
};

export default AvatarModal