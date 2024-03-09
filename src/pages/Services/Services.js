import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Blood Pressure Measurement', report: 'View Report', image: '/path/to/blood-pressure.svg' },
    { title: 'Body Temperature', report: 'View Report', image: '/path/to/body-temperature.svg' },
    { title: 'Fetal Movements', report: 'View Report', image: '/path/to/fetal-movements.svg' },
    { title: 'Body Heartbeat Rate', report: 'View Report', image: '/path/to/body-heartbeat-rate.svg' },
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <button>{service.report}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
