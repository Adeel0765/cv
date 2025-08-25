import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../assets/styles/CVPage.scss';

const CVPage: React.FC = () => {
  const navigate = useNavigate();
  const CV_PDF_PATH = '/cv/RehanCV.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV_PDF_PATH;
    link.download = 'Rehan_Cheema_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cv-page">
      <div className="cv-page-header">
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          className="back-button"
        >
          Back
        </Button>
        <h1>My CV</h1>
      </div>
      <div className="cv-container">
        <iframe 
          src={`${process.env.PUBLIC_URL}${CV_PDF_PATH}#view=FitH`}
          title="Rehan Cheema's CV"
          className="cv-iframe"
        />
      </div>
      <div className="cv-actions">
        <Button
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
          onClick={handleDownload}
          className="download-button"
        >
          Download CV
        </Button>
      </div>
    </div>
  );
};

export default CVPage;
