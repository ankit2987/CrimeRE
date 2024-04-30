import React from 'react';
import { Link } from 'react-router-dom';

export const UserHomepage = () => {
  return (
    <div>
      <header>
        <nav className="navbar" style={{ position: 'fixed', top: '0', width: '100%', zIndex: '1000' }}>
        <div className="nav-title">India Crime Analysis</div>
        <ul className="nav-links">
            <li><Link to = "/user-home">Home</Link></li>
            <li><Link to="/crime-report">Report Crime</Link></li>
            
            
            <li><Link to="/crime-map">Crime Maps</Link></li>
            <li><Link to="/crime-prediction">Crime Prediction</Link></li>
            <li><Link to="/">Logout</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Your homepage content goes here */}
      </main>
      <style>{`
       .navbar {
        background-color: #333;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .nav-title {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        margin-left: 5px;
      }
      .nav-links {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 20px;
        margin-right: 20px;
      }
      .nav-links li {
        display: inline;
        margin-left: 5px;
      }
      .nav-links a {
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
        margin-left: 5px;
      }
      .nav-links a:hover {
        text-decoration: underline;
      }
      h1 {
        margin-top: 20px;
      }
      p {
        margin-bottom: 20px;
      }
    `}</style>
  </div>
);
};