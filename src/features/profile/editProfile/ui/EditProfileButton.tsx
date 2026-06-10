'use client';

import { useState } from 'react';
import { Button } from '@mui/material';
import { EditProfileModal } from './EditProfileModal';

export const EditProfileButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" size='large' onClick={() => setOpen(true)}>
        Редактировать профиль
      </Button>
      <EditProfileModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};