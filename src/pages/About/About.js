import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <div className="content-container">
        <div className="text-column">
          <p>
            At [Your Company Name], we're committed to revolutionizing maternal healthcare.
            Our innovative personalized healthcare system ensures effective care for pregnant women
            in both hospital and home environments. With a focus on seamless data extraction and processing,
            we strive to reduce mortality rates by providing integrated, cost-effective solutions.
            Join us in shaping the future of maternal and child health.
          </p>
        </div>
        <div className="image-column">
          {/* SVG Images */}
          <div className="svg-container">
            <img
              className="svg-image"
              src="/path/to/healthcare-system-1.svg"
              alt="Healthcare System 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
