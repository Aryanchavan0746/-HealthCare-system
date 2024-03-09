import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import img from '../../Images/Pregnant-Woman.jpeg'
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (remove this in a real application)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className="home">
          <h2>Bringing Health to Life For The Whole Family</h2>
          <p>Providing integrated and personalized healthcare services for effective care.</p>
          <Link to="/appointments"><button>Make an Appointment</button></Link>

          {/* SVG Images */}
          <div className="svg-container">
            <img className="svg-image" src="/path/to/healthcare-robot.svg" alt="Healthcare System Robot" />
            <img className="svg-image" src={img} alt="Pregnant Woman" />

          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
