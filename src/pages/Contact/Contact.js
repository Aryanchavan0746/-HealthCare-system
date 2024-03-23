import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <div className="contact-field">
          {/* <img src="/path/to/contact-first-name.svg" alt="First Name" /> */}
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
        </div>
        <div className="contact-field">
          {/* <img src="/path/to/contact-last-name.svg" alt="Last Name" /> */}
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="contact-field">
          {/* <img src="/path/to/contact-email.svg" alt="Email ID" /> */}
          <label>Email ID</label>
          <input type="email" placeholder="Email ID" />
        </div>
        <div className="contact-field">
          {/* <img src="/path/to/contact-phone-number.svg" alt="Phone Number" /> */}
          <label>Phone Number</label>
          <input type="tel" placeholder="Phone Number" />
        </div>
       
      </form>
      <div className='com'>
        <label>Comments</label>
        <textarea placeholder="Enter your comments here..."></textarea>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
