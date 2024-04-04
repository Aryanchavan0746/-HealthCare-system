// Footer.js
import React from 'react';
import './Footer.css';
import Linkedin_icon from '../../Images/Linkedin_icon.png';
import twitter_icon from '../../Images/twitter_icon.png';
import insta_icon from '../../Images/insta_icon.png';
import face_icon from '../../Images/face_icon.png';

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
          <img src={insta_icon} alt="Instagram" />
        </a>
        <a href="#facebook" target="_blank" rel="noopener noreferrer">
          <img src={face_icon} alt="Facebook" />
        </a>
      </div>
      <div>
        <p>1 Health Street, Cityville, Country</p>
        <p>&copy; 2024 Pregnant Women Healthcare System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
