import React from 'react';
import { Link } from 'react-router-dom';

 const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={navTitleStyle}>India Crime Analysis</div>
      <div style={navLinksStyle}>
        <Link to="/Home" style={navLinkStyle}>Home</Link>
        <Link to="/crime-reports" style={navLinkStyle}>Crime Reports</Link>
        <Link to="/crime-profiling" style={navLinkStyle}>Crime Profiling</Link>
        <Link to="/crime-map" style={navLinkStyle}>Crime Map</Link>
        <Link to="/" style={navLinkStyle}>Logout</Link>
      </div>
    </nav>
  );
};


const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#333',
  color: '#fff',
  padding: '10px 20px',
};

const navTitleStyle = {
  fontSize: '1.5rem',
};

const navLinksStyle = {
  display: 'flex',
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  marginLeft: '10px',
};


export   default Navbar;