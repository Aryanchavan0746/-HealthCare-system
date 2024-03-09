import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// 3rd changes

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/path/to/healthcare-robot.svg" alt="Healthcare System Robot Logo" />
        </Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
