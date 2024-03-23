import React from 'react';
import './Footer.css';
import Linkedin_icon from '../../Images/Linkedin_icon.png'
import twitter_icon from '../../Images/twitter_icon.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="#linkedin" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin_icon} alt="LinkedIn" />
        </a>
        <a href="#twitter" target="_blank" rel="noopener noreferrer">
          <img src={twitter_icon} alt="Twitter" />
        </a>
        <a href="#instagram" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/instagram-icon.svg" alt="Instagram" />
        </a>
        <a href="#facebook" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/facebook-icon.svg" alt="Facebook" />
        </a>
      </div>
      <p>123 Health Street, Cityville, Country</p>
      <p>&copy; 2024 Pregnant Women Healthcare System. All rights reserved.</p>
      
    </footer>
  );
};

export default Footer;
