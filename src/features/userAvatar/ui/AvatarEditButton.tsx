'use client';

import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AvatarModal from './AvatarModal';

const AvatarEditButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Редактировать аватар">
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: 'background.paper',
            boxShadow: 1,
            '&:hover': { backgroundColor: 'secondary.light' },
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <AvatarModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default AvatarEditButton