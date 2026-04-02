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
      title: 'Junior React Developer',
      company: 'TeamXAI (Remote)',
      date: 'Jul 2024 - Jul 2025',
      description: 'Collaborated on React.js projects with a focus on reusable components. Integrated REST APIs and improved component-level performance.',
      certificateUrl: teamXaiCertificate
    },
    {
      id: 'qfinity',
      title: 'Junior React Native Developer',
      company: 'Qfinity (Remote)',
      date: 'Apr 2025 - Jun 2025',
      description: 'Built cross-platform mobile applications using React Native and TypeScript.',
      // certificateUrl: '/certificates/qfinity-certificate.jpg'
    },
    {
      id: 'fullstack-zone',
      title: 'Web Developer Intern',
      company: 'Full Stack Zone, Islamabad, Pakistan',
      date: 'Jan 2025 - Mar 2025',
      description: 'Developed responsive web apps using HTML5, CSS3, JS, and React.js. Improved UI/UX and optimized performance.',
      certificateUrl: fullStackZoneCertificate
    },
    {
      id: 'ajk-itboard',
      title: 'Frontend Developer Intern',
      company: 'AJK ITBoard, Muzaffarabad, Pakistan',
      date: 'Jul 2024 - Sep 2024',
      description: 'Built interactive UIs with React.js and Bootstrap. Integrated APIs and enhanced existing web designs.',
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
