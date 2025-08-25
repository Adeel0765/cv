import React from 'react';
import { Dialog, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/CVModal.scss';

const CV_PDF_PATH = '/cv/RehanCV.pdf';

interface CVModalProps {
  open: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ open, onClose }) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      className="cv-modal"
      PaperProps={{
        style: {
          margin: '5px',
          maxWidth: '800px',
          maxHeight: '90vh',
          borderRadius: '20px',
          overflow: 'hidden',
          background: '#1e1e2e',
          boxShadow: '0 15px 60px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.05)'
        }
      }}
    >
      <div className="modal-header">
        <div className="header-content">
          <div className="header-left">
            <h3>My Professional CV</h3>
          </div>
          <div className="header-actions">
            <IconButton 
              className="close-button" 
              onClick={onClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
          </div>
        </div>
      </div>
      
      <div className="cv-image-container">
        <div className="cv-image-wrapper">
          <img 
            src={`${process.env.PUBLIC_URL}/cv/cv-image.png`}
            alt="Rehan Cheema's CV"
            className="cv-image"
            loading="lazy"
          />
        </div>
        
        <a 
          href={`${process.env.PUBLIC_URL}${CV_PDF_PATH}`} 
          download="Rehan_Cheema_CV.pdf"
          className="bottom-download-button"
        >
          <DownloadIcon fontSize="small" />
          <span>Download My CV</span>
        </a>
      </div>
    </Dialog>
  );
};

export default CVModal;
