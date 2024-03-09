import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="#linkedin" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/linkedin-icon.svg" alt="LinkedIn" />
        </a>
        <a href="#twitter" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/twitter-icon.svg" alt="Twitter" />
        </a>
        <a href="#instagram" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/instagram-icon.svg" alt="Instagram" />
        </a>
        <a href="#facebook" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/facebook-icon.svg" alt="Facebook" />
        </a>
      </div>
      <p>&copy; 2024 Pregnant Women Healthcare System. All rights reserved.</p>
      <p>123 Health Street, Cityville, Country</p>
    </footer>
  );
};

export default Footer;
