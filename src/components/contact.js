import React from 'react';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import '../styles/contact.css'; // Adjust path if needed

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact</h1>
      <div className="contact-info">
        <p>Email: <a href="mailto:satishdaliboina@gmail.com">satishdaliboina@gmail.com</a></p>
        <p>
          <FaLinkedin className="contact-icons" />
          LinkedIn: <a href="https://www.linkedin.com/in/satish-daliboina-32a59a28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">linkedin.com/in/satish-daliboina-32a59a28a</a>
        </p>
        <p>
          <FaGithub className="contact-icons" />
          GitHub: <a href="https://github.com/Daliboinasatish5" target="_blank" rel="noopener noreferrer">github.com/Daliboinasatish5/DALIBOINA-SATISH</a>
        </p>
        <p>
          <FaPhone className="contact-icons" />
          Phone: <a href="9959905751">+91 9959905751</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
