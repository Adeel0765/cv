import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import CVModal from './CVModal';
import '../assets/styles/Main.scss';
import ProfileImage from '../assets/images/rehancheema.jpg';

function Main() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsMounted(true);
  }, []);

  const handleCVClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCVModalOpen(true);
  };

  const handleCloseCVModal = () => {
    setIsCVModalOpen(false);
  };

  return (
    <div className="container">
      <div className={`about-section ${isMounted ? 'animate-in' : ''}`}>
        <div className="image-wrapper">
          <img src={ProfileImage} alt="Rehan Cheema" />
        </div>
        <div className="content">
          <div className={`social_icons ${isMounted ? 'animate-in' : ''}`}>
            <a href="https://www.linkedin.com/in/rehan-cheemaa/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://github.com/Rehancheemaa" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="#" onClick={handleCVClick}><DescriptionIcon/></a>
          </div>
          <h1 className={isMounted ? 'animate-in' : ''}>Rehan Cheema</h1>
          <p className={isMounted ? 'animate-in' : ''}>Full Stack Developer</p>

          <div className={`mobile_social_icons ${isMounted ? 'animate-in' : ''}`}>
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
