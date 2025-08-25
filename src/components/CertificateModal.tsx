import React from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import '../assets/styles/CertificateModal.scss';

interface CertificateModalProps {
  open: boolean;
  onClose: () => void;
  imageUrl?: string;
  title: string;
}

function CertificateModal({ open, onClose, imageUrl, title }: CertificateModalProps) {
  if (!imageUrl) return null;

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      className="certificate-modal"
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent className="certificate-content">
        <h2>{title} - Certificate</h2>
        <div className="image-container">
          <img 
            src={imageUrl} 
            alt={`${title} Certificate`} 
            className="certificate-image"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CertificateModal;
