import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import CVModal from './CVModal.tsx';
import '../assets/styles/Main.scss';
import ProfileImage from '../assets/images/rehancheema.jpg';

function Main() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const handleCVClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCVModalOpen(true);
  };

  const handleCloseCVModal = () => {
    setIsCVModalOpen(false);
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ProfileImage} alt="Rehan Cheema" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/rehan-cheemaa/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://github.com/Rehancheemaa" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="#" onClick={handleCVClick}><DescriptionIcon/></a>
          </div>
          <h1>Rehan Cheema</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Rehancheemaa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rehan-cheemaa/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="#" onClick={handleCVClick}><DescriptionIcon/></a>
          </div>
        </div>
      </div>
      <CVModal 
        open={isCVModalOpen}
        onClose={handleCloseCVModal}
      />
    </div>
  );
}

export default Main;