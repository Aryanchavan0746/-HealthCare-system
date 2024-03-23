// Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Images/logo.jpg';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img className="logo1" src={logo} alt="Healthcare System Robot Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link
            to="/"
            onClick={() => handleNavLinkClick('/')}
            className={activeLink === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => handleNavLinkClick('/about')}
            className={activeLink === '/about' ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            onClick={() => handleNavLinkClick('/services')}
            className={activeLink === '/services' ? 'active' : ''}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => handleNavLinkClick('/contact')}
            className={activeLink === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
