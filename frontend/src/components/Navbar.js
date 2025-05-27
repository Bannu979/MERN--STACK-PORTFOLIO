import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">Prabhas</div>
      <ul className="navbar-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
        <li><Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>Education</Link></li>
        <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
      </ul>
      <button className="theme-toggle"><FaMoon /></button>
    </nav>
  );
};

export default Navbar; 