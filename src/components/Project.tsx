import React from "react";
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.png';
import mock12 from '../assets/images/mock12.png';
import mock13 from '../assets/images/mock13.png';


import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/Rehancheemaa/CropDetecion" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Rehancheemaa/CropDetecion" target="_blank" rel="noreferrer"><h2>AI Based Crop Disease Detection</h2></a>
                    <p>Developed an AI-powered mobile application for detecting crop diseases using computer vision. The app allows farmers to quickly identify plant diseases by taking photos, providing instant diagnosis and treatment recommendations to improve crop yield and health.</p>
                </div>
                <div className="project">
                    <a href="https://senate-of-pakistan-project.vercel.app" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://senate-of-pakistan-project.vercel.app" target="_blank" rel="noreferrer"><h2>senate Of Pakistan project(clone)
                    </h2></a>
                    <p>Developed a responsive and interactive clone of the Senate of Pakistan website, implementing modern UI/UX principles with React and TypeScript to create an accessible and user-friendly government portal.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Rehancheemaa/KnightsOfEldoria" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Rehancheemaa/KnightsOfEldoria" target="_blank" rel="noreferrer"><h2>Knights Of Eldoria
                    </h2></a>
                    <p>Created a 2D fantasy role-playing game using Python, featuring character progression, combat mechanics, and an immersive fantasy world with quests and exploration elements.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Rehancheemaa/final_detection_code" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Rehancheemaa/final_detection_code" target="_blank" rel="noreferrer"><h2>Text Classification</h2></a>
                    <p>Developed an advanced text classification system using natural language processing techniques, implementing machine learning models to categorize and analyze text data with high accuracy and efficiency.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Rehancheemaa/college_management_system" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Rehancheemaa/college_management_system" target="_blank" rel="noreferrer"><h2>College Management System</h2></a>
                    <p>Designed and developed a comprehensive College Management System using PHP, streamlining administrative tasks, student record management, and faculty coordination for enhanced institutional efficiency.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Rehancheemaa/healthtracker" target="_blank" rel="noreferrer"><img src={mock13} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Rehancheemaa/healthtracker" target="_blank" rel="noreferrer"><h2>Health Tracker</h2></a>
                    <p>Built a robust Health Tracker application with TypeScript, allowing users to monitor vital health metrics, track fitness progress, and visualize personal wellness data through an intuitive interface.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Rehancheemaa/alumni-management-system-react" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Rehancheemaa/alumni-management-system-react" target="_blank" rel="noreferrer"><h2>Alumni Management System</h2></a>
                    <p>Developed an Alumni Management System using React and JavaScript, facilitating seamless networking between graduates and the institution, featuring event management and community engagement tools.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;