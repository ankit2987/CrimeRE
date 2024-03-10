import React from 'react';
import { Link } from 'react-router-dom';

export const Hom = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-title">India Crime Analysis</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/ai">Ask AI</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
      </nav>
      
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          background-color: #333;
          padding: 10px;
        }
        .nav-title {
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav-links {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        .nav-links li {
          display: inline;
          margin-right: 10px;
        }
        .nav-links li:last-child {
          margin-right: 0;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
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
