import { useState } from 'react';
import { useAppSelector } from '@/app/store/hooks';
import { selectUserInterests } from '@/entities/user';
import {
  Chip,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@/shared/ui/mui';
import AddIcon from '@mui/icons-material/Add';
import { useUpdateInterestsMutation } from '@/entities/user';

const testId = 'd5e5cc54-8ac0-4c4c-91b6-e5e08f500e88';

const UserInterests = () => {
  const currentInterests = useAppSelector(selectUserInterests);
  const [updateInterests, { isLoading }] = useUpdateInterestsMutation();

  const [openDialog, setOpenDialog] = useState(false);
  const [newInterest, setNewInterest] = useState('');
  const [interests, setInterests] = useState<string[]>(currentInterests);

  const editInterests = async (newInterests: string[]) => {
    const previousInterests = interests;
    setInterests(newInterests);
    console.log({ interests, newInterests });
    try {
      await updateInterests({
        id: testId,
        interests: newInterests,
      }).unwrap();
    } catch (err) {
      setInterests(previousInterests);
      console.error('Update error:', err);
    }
  };

  const handleDelete = async (interestToDelete: string) => {
    const newInterests = interests.filter((i) => i !== interestToDelete);
    await editInterests(newInterests);
  };

  const handleAdd = async () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      const newInterests = [...interests, newInterest.trim()];
      console.log({ newInterests });
      await editInterests(newInterests);
    }
    setNewInterest('');
    setOpenDialog(false);
  };

  if (!currentInterests) return null;

  return (
    <div className="flex gap-2">
      {currentInterests?.map((interest) => (
        <Chip
          key={interest}
          label={interest}
          onDelete={() => handleDelete(interest)}
        />
      ))}
      <IconButton
        onClick={() => setOpenDialog(true)}
        size="small"
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': { backgroundColor: 'primary.light' },
        }}
      >
        <AddIcon />
      </IconButton>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Добавить увлечение</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Мое увлечение"
            fullWidth
            value={newInterest}
            onChange={(e) => setNewInterest(e.target.value)}
            disabled={isLoading}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Отмена</Button>
          <Button onClick={handleAdd} variant="contained">
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserInterests;
