import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';
import CertificateModal from '../components/CertificateModal';

// Import certificate images
import teamXaiCertificate from '../assets/images/TeamXAI.jpg';
import fullStackZoneCertificate from '../assets/images/FullStackZone.jpg';

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  certificateUrl?: string;
}

interface TimelineProps {
  mode: string;
}

function Timeline({ mode }: TimelineProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<{open: boolean, item: TimelineItem | null}>({
    open: false,
    item: null
  });

  const timelineData: TimelineItem[] = [
    {
      id: 'teamxai',
      title: 'Junior React Native Developer',
      company: 'TeamXAI (Remote)',
      date: 'Feb 2025 - Present',
      description: 'Built and maintained React Native apps with reusable components, integrated APIs, fixed bugs, and delivered features including real-time chat, push notifications, audio recording/playback, and event management flows.',
      certificateUrl: teamXaiCertificate
    },
    {
      id: 'fullstack-zone',
      title: 'Web Developer (Intern)',
      company: 'Full Stack Zone, Islamabad, Pakistan',
      date: 'Dec 2024 - Feb 2025',
      description: 'Created responsive web pages using HTML, CSS, JavaScript, and React.js, improved UI/UX, added new features, fixed bugs, and connected applications with APIs to display live data.',
      certificateUrl: fullStackZoneCertificate
    },
    {
      id: 'ajk-itboard',
      title: 'Frontend Developer Intern',
      company: 'AJK ITBoard, Muzaffarabad, Pakistan',
      date: 'Jul 2024 - Sep 2024',
      description: 'Built interactive and responsive user interfaces using React.js and Bootstrap, integrated RESTful APIs, improved performance, and collaborated on clean, maintainable frontend code.',
      // certificateUrl: '/certificates/ajk-itboard-certificate.jpg'
    },
    {
      id: 'softaxus',
      title: 'Frontend Developer (Intern)',
      company: 'Softaxus, Islamabad, Pakistan',
      date: 'Jul 2021 - Sep 2021',
      description: 'Developed dynamic React.js interfaces with reusable components and hooks, improved load speed and cross-browser compatibility, and assisted with API integration for real-time data updates.',
      // certificateUrl: '/certificates/ajk-itboard-certificate.jpg'
    }
  ];

  const handleCertificateClick = (e: React.MouseEvent, item: TimelineItem) => {
    e.stopPropagation();
    if (item.certificateUrl) {
      setSelectedCertificate({ open: true, item });
    }
  };

  const handleCloseCertificate = () => {
    setSelectedCertificate({ open: false, item: null });
  };
  return (
    <div id="history" className={`${mode === 'light' ? 'light-mode' : ''}`}>
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline className="vertical-timeline-custom-line">
          {timelineData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date={item.date}
              iconStyle={{ background: '#5000ca', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              onTimelineElementClick={() => item.certificateUrl && setSelectedCertificate({ open: true, item })}
            >
              <div className="timeline-header">
                <div>
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
                </div>
                {item.certificateUrl && (
                  <button 
                    className="certificate-button"
                    onClick={(e) => handleCertificateClick(e, item)}
                    title="View Certificate"
                  >
                    <FontAwesomeIcon icon={faCertificate} />
                  </button>
                )}
              </div>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <CertificateModal
        open={selectedCertificate.open}
        onClose={handleCloseCertificate}
        imageUrl={selectedCertificate.item?.certificateUrl}
        title={`${selectedCertificate.item?.title} at ${selectedCertificate.item?.company}`}
      />
    </div>
  );
}

export default Timeline;
