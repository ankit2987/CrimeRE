import React from 'react';
import { Link } from 'react-router-dom';

export const UserHomepage = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/crime-report">Report Crime</Link></li>
            <li><Link to="/crime-map">Crime Maps</Link></li>
            <li><Link to="/crime-prediction">Crime Prediction</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Your homepage content goes here */}
      </main>
      <style>{`
        header {
          background-color: #333;
          padding: 10px 0;
        }
        nav ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          text-align: right;
        }
        nav ul li {
          display: inline;
          margin-right: 20px;
        }
        nav ul li:last-child {
          margin-right: 0;
        }
        nav ul li a {
          color: white;
          text-decoration: none;
          font-size: 18px;
        }
        nav ul li a:hover {
          text-decoration: underline;
        }
        main {
          padding: 20px;
        }
        h1 {
          color: #333;
        }
      `}</style>
    </div>
  );
}


