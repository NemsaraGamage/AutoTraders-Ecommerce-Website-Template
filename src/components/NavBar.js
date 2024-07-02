import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles.css';
import autoLogo from './pics/logo.png'

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-logo">
        <img src={autoLogo} alt="Chef's Kiss Logo" className="logo-img" />
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/VehiclePage" className="nav-link">Vehicle</Link>
        <Link to="" className="nav-link">Plans</Link>
        <Link to="" className="nav-link">Contact</Link>
      </div>
      <div className="auth-buttons">
        <Link to="/" className="auth-button login">Login</Link>
      </div>
    </nav>
  );
}

export default NavBar;