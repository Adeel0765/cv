import React from "react";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss';

interface FooterProps {
  mode: string;
}

function Footer({ mode }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box component="footer" className={`footer ${mode === 'light' ? 'light-mode' : ''}`}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6} className="footer-social">
            <Typography variant="h6" className="footer-title">Connect with me</Typography>
            <div className="social-links">
              <IconButton 
                href="https://github.com/Rehancheemaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <GitHubIcon className="social-icon" />
              </IconButton>
              <IconButton 
                href="https://www.linkedin.com/in/rehan-cheemaa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="social-icon" />
              </IconButton>
              <IconButton 
                href="mailto:your.email@example.com" 
                className="social-link"
                aria-label="Email"
              >
                <EmailIcon className="social-icon" />
              </IconButton>
            </div>
          </Grid>
          
          <Grid item xs={12} md={6} className="footer-copyright">
            <Typography variant="body2" className="copyright-text">
              © {currentYear} Rehan Cheema. All rights reserved.
            </Typography>
            <Typography variant="caption" className="credit-text">
              Designed & built with React and Material-UI
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;