'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Chip,
  IconButton,
  Autocomplete,
  CircularProgress,
  Alert,
  Snackbar,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ru } from 'date-fns/locale';
import AddIcon from '@mui/icons-material/Add';
import { useUpdateUserMutation } from '@/entities/user';
import { useAppSelector } from '@/app/store/hooks';
import { selectUser } from '@/entities/user';

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
}

const testId = 'd5e5cc54-8ac0-4c4c-91b6-e5e08f500e88';
// Предопределённые предложения для интересов (можно загружать с бэка)
const SUGGESTED_INTERESTS = [
  'Музыка',
  'Спорт',
  'Кино',
  'Книги',
  'Путешествия',
  'Фотография',
  'IT',
  'Дизайн',
];

export const EditProfileModal = ({ open, onClose }: EditProfileModalProps) => {
  const currentUser = useAppSelector(selectUser);
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  // Состояния формы
  const [displayName, setDisplayName] = useState(
    () => currentUser?.displayName ?? ''
  );
  const [bio, setBio] = useState(() => currentUser?.bio ?? '');
  const [interests, setInterests] = useState(
    () => currentUser?.interests ?? []
  );
  const [birthDate, setBirthDate] = useState<Date | null>(() => {
    if (!currentUser?.birthDate) return null;
    try {
      return new Date(currentUser.birthDate);
    } catch {
      return null;
    }
  });
  // Состояние для управления диалоговым окном
  const [inputInterest, setInputInterest] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  // Валидация
  const validate = () => {
    const newErrors: typeof errors = {};
    if (!displayName.trim()) newErrors.displayName = 'Имя обязательно';
    if (birthDate && birthDate > new Date())
      newErrors.birthDate = 'Дата рождения не может быть в будущем';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddInterest = () => {
    const trimmed = inputInterest.trim();
    if (trimmed && !interests.includes(trimmed)) {
      setInterests((prev) => [...prev, trimmed]);
      setInputInterest('');
    }
  };

  const handleDeleteInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  const handleSubmit = async () => {
    if (!validate() || !currentUser) return;

    const data = {
      displayName: displayName.trim(),
      bio: bio.trim(),
      interests,
      birthDate: birthDate ? birthDate.toISOString() : 'null',
    };

    try {
      await updateUser({
        id: testId,
        ...data,
      }).unwrap();
      setSnackbar({
        open: true,
        message: 'Профиль успешно обновлён',
        severity: 'success',
      });
      onClose();
    } catch (err) {
      setSnackbar({
        open: true,
        message: 'Ошибка при обновлении профиля',
        severity: 'error',
      });
      console.error('Update profile error:', err);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle>Редактировать профиль</DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Имя"
              fullWidth
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              error={!!errors.displayName}
              helperText={errors.displayName}
              disabled={isLoading}
            />
            <TextField
              label="Био"
              fullWidth
              multiline
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              disabled={isLoading}
            />
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={ru}
            >
              <DatePicker
                label="Дата рождения"
                value={birthDate}
                onChange={(newValue) => setBirthDate(newValue)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !!errors.birthDate,
                    helperText: errors.birthDate,
                  },
                }}
                disabled={isLoading}
                format="dd MMMM yyyy"
              />
            </LocalizationProvider>
            <Box>
              <Box
                sx={{ display: 'flex', gap: 1, mb: 2, alignItems: 'center' }}
              >
                <Autocomplete
                  freeSolo
                  options={SUGGESTED_INTERESTS}
                  inputValue={inputInterest}
                  onInputChange={(_, newValue) => setInputInterest(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Добавить интерес"
                      size="small"
                      fullWidth
                      disabled={isLoading}
                    />
                  )}
                  sx={{ flexGrow: 1 }}
                />
                <IconButton
                  onClick={handleAddInterest}
                  disabled={isLoading || !inputInterest.trim()}
                >
                  <AddIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {interests.map((interest) => (
                  <Chip
                    key={interest}
                    label={interest}
                    onDelete={() => handleDeleteInterest(interest)}
                    color="primary"
                    variant="outlined"
                    disabled={isLoading}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={onClose} disabled={isLoading}>
            Отмена
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : 'Сохранить'}
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};
