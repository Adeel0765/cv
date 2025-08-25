import React from 'react';
import { Dialog, DialogContent, IconButton, Fab, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/CVModal.scss';

const CV_PDF_PATH = '/cv/RehanCV.pdf';

interface CVModalProps {
  open: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ open, onClose }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV_PDF_PATH;
    link.download = 'Rehan_Cheema_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      fullScreen
      className="cv-modal"
    >
      {/* Header */}
      <div className="cv-modal-header">
        <div className="header-content">
          <div className="header-left">
            <Typography variant="h5" className="cv-title">My Curriculum Vitae</Typography>
            <Typography variant="subtitle2" className="cv-subtitle">Professional Overview</Typography>
          </div>
          <div className="header-actions">
            <IconButton 
              aria-label="close" 
              onClick={onClose}
              className="close-button"
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Content */}
      <DialogContent className="cv-modal-content">
        <iframe 
          src={`${process.env.PUBLIC_URL}${CV_PDF_PATH}#view=FitH`}
          title="Rehan Cheema's CV"
          className="cv-pdf"
        />
      </DialogContent>

      {/* Floating Download Button */}
      <Fab 
        color="primary" 
        aria-label="download" 
        className="download-fab"
        onClick={handleDownload}
      >
        <DownloadIcon />
      </Fab>
    </Dialog>
  );
};

export default CVModal;
