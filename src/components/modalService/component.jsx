import { Dialog, Fade } from '@mui/material';
import React from 'react';

const ModalService = ({ open, onClose }) => {
  return (
    <Dialog
      transitionDuration={300}
      TransitionComponent={Fade}
      open={open}
      onClose={onClose}
    ></Dialog>
  );
};

export default ModalService;
