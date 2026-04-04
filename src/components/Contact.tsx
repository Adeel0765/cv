import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';

interface ContactProps {
  mode: string;
}

const Contact = ({ mode }: ContactProps) => {
  const EnvelopeIcon = FaEnvelope as React.ElementType;
  const GithubIcon = FaGithub as React.ElementType;
  const LinkedinIcon = FaLinkedin as React.ElementType;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const emailJsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }

    if (submissionStatus) {
      setSubmissionStatus(null);
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim() === ''
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
        throw new Error('EmailJS is not configured');
      }

      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          to_email: 'rehancheemaa@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email
        },
        emailJsPublicKey
      );

      setFormData({ name: '', email: '', message: '' });
      setSubmissionStatus({
        type: 'success',
        message: 'Your message was sent successfully to rehancheemaa@gmail.com.'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus({
        type: 'error',
        message: 'Email sending is not configured correctly or failed. Add your EmailJS keys and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`contact-section ${mode === 'light' ? 'light-mode' : ''}`}>
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p className="subtitle">Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!</p>
        </div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3>Contact Information</h3>
            <p>Feel free to reach out through any of these platforms:</p>

            <div className="contact-methods">
              <a href="mailto:rehancheemaa@gmail.com" className="contact-method">
                <EnvelopeIcon className="contact-icon" />
              </a>
              <a href="https://github.com/Rehancheemaa" target="_blank" rel="noopener noreferrer" className="contact-method">
                <GithubIcon className="contact-icon" />
              </a>
              <a href="https://www.linkedin.com/in/rehan-cheemaa/" target="_blank" rel="noopener noreferrer" className="contact-method">
                <LinkedinIcon className="contact-icon" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  helperText={errors.name ? 'Please enter your name' : ''}
                  variant="filled"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email ? 'Please enter a valid email' : ''}
                  variant="filled"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  helperText={errors.message ? 'Please enter your message' : ''}
                  variant="filled"
                  multiline
                  rows={5}
                  className="form-input"
                />
              </div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<SendIcon />}
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submissionStatus && (
                <p className={`form-status ${submissionStatus.type}`} role="status">
                  {submissionStatus.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
