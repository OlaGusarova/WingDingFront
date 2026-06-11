'use client';

import {
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
  Box,
  Alert,
  Avatar,
  IconButton,
  Button,
} from '@/shared/ui/mui';
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useAppSelector } from '@/app/store/hooks';
import {
  selectUser,
  selectUserId,
  useUpdateAvatarMutation,
  useDeleteAvatarMutation,
} from '@/entities/user';
import AvatarUpload from './AvatarUpload';

interface AvatarModalProps {
  open: boolean;
  onClose: () => void;
}

const AvatarModal = ({ open, onClose }: AvatarModalProps) => {
  const user = useAppSelector(selectUser);
  const [updateAvatar] = useUpdateAvatarMutation();
  const [deleteAvatar] = useDeleteAvatarMutation();

  const userId = useAppSelector(selectUserId);
  const avatars = user.avatars;

  const handleSetAvatarByDefault = async (avatarId: string) => {
    try {
      await updateAvatar({
        id: userId,
        avatarId,
        isDefault: true,
        isActive: true,
      }).unwrap();
      alert('Аватар успешно обновлен!');
    } catch (err) {
      console.error('Не удалось установить аватар', err);
    }
  };

  const handleDeleteAvatar = async (avatarId: string) => {
    try {
      await deleteAvatar({ id: userId, avatarId }).unwrap();
      alert('Аватар успешно удален');
    } catch (err) {
      console.error('Не удалось удалить аватар', err);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        borderRadius: 3,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
      }}
    >
      <DialogContent dividers>
        {avatars && avatars.length === 0 && (
          <Alert severity="info" sx={{ mt: 2 }}>
            У вас пока нет загруженных аватаров.
          </Alert>
        )}
        {avatars && avatars.length > 0 && (
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {avatars.map((avatar) => (
              <Grid size={{ xs: 4 }} key={avatar.avatarId}>
                <Box
                  sx={{
                    cursor: 'pointer',
                    position: 'relative',
                    border: '1px dashed #ddd',
                    borderRadius: 2,
                    p: 2,
                  }}
                >
                  <Avatar
                    src={avatar.avatarUri}
                    alt="Avatar"
                    sx={{ width: '100%', height: 'auto', aspectRatio: '1 / 1' }}
                  />
                  <div className="flex justify-between">
                    <IconButton
                      size="small"
                      onClick={() => handleSetAvatarByDefault(avatar.avatarId)}
                      sx={{
                        color: avatar.isDefault ? '#e91e63' : 'text.secondary',
                        '&:hover': {
                          backgroundColor: avatar.isDefault
                            ? 'rgba(233, 30, 99, 0.08)'
                            : 'rgba(0, 0, 0, 0.04)',
                        },
                      }}
                    >
                      {avatar.isDefault ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>

                    <IconButton
                      size="small"
                      onClick={() => handleDeleteAvatar(avatar.avatarId)}
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: '#f44336',
                          backgroundColor: 'rgba(244, 67, 54, 0.08)',
                        },
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 4,
            mb: 2,
          }}
        >
          <AvatarUpload />
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2, justifyContent: 'end' }}>
        <Button onClick={onClose} variant="outlined" size="large">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AvatarModal;
