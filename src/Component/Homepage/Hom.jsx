import React from 'react';
import { Link } from 'react-router-dom';

export const Hom = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-title">India Crime Analysis</div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/login" className="nav-link">Login</Link></li>
          <li><Link to="/ai" className="nav-link">Ask AI</Link></li>
          <li><Link to="/news" className="nav-link">News</Link></li>
        </ul>
      </nav>

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
        }
        .nav-links {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 20px;
        }
        .nav-links li {
          display: inline;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
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
