import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

interface ContactProps {
  mode: string;
}

const Contact = ({ mode }: ContactProps) => {
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
      // Replace with your form submission logic
      // await emailjs.send(...);
      console.log('Form submitted:', formData);

      // Reset form
      setFormData({ name: '', email: '', message: '' });

      // Show success message
      alert('Thank you for your message! I will get back to you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again later.');
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
                {<FaEnvelope className="contact-icon" /> as any}
              </a>
              <a href="https://github.com/Rehancheemaa" target="_blank" rel="noopener noreferrer" className="contact-method">
                {<FaGithub className="contact-icon" /> as any}
              </a>
              <a href="https://www.linkedin.com/in/rehan-cheemaa/" target="_blank" rel="noopener noreferrer" className="contact-method">
                {<FaLinkedin className="contact-icon" /> as any}
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
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;