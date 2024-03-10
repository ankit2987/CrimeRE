import React, { useState } from 'react';
import { Hom } from './Hom';

export const Login = () => {
  const [loginType, setLoginType] = useState('user'); // Default login type is user
  const [aadharNumber, setAadharNumber] = useState('');
  const [officialUniqueId, setOfficialUniqueId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [officialPassword, setOfficialPassword] = useState('');

  const handleLoginTypeChange = (type) => {
    setLoginType(type);
    // Reset fields when switching login type
    setAadharNumber('');
    setOfficialUniqueId('');
    setUserPassword('');
    setOfficialPassword('');
  };

  const handleAadharNumberChange = (e) => {
    setAadharNumber(e.target.value);
  };

  const handleOfficialUniqueIdChange = (e) => {
    setOfficialUniqueId(e.target.value);
  };

  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleOfficialPasswordChange = (e) => {
    setOfficialPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Depending on the login type, you can handle authentication here
    if (loginType === 'user') {
      // Handle user login with Aadhar number and password
      console.log('User login with Aadhar Number:', aadharNumber, 'and Password:', userPassword);
    } else {
      // Handle official login with unique id and password
      console.log('Official login with Unique ID:', officialUniqueId, 'and Password:', officialPassword);
    }
  };

  return (
    <div>
      <Hom />
      <h2>Login</h2>
      <div>
        <button onClick={() => handleLoginTypeChange('user')}>User Login</button>
        <button onClick={() => handleLoginTypeChange('official')}>Official Login</button>
      </div>
      <form onSubmit={handleLoginSubmit} className="login-form">
        {loginType === 'user' ? (
          <div>
            <label htmlFor="aadharNumber">Enter Aadhar Card Number:</label>
            <input type="text" id="aadharNumber" value={aadharNumber} onChange={handleAadharNumberChange} />
            <label htmlFor="userPassword">Enter Password:</label>
            <input type="password" id="userPassword" value={userPassword} onChange={handleUserPasswordChange} />
          </div>
        ) : (
          <div>
            <label htmlFor="officialUniqueId">Enter Unique ID:</label>
            <input type="text" id="officialUniqueId" value={officialUniqueId} onChange={handleOfficialUniqueIdChange} />
            <label htmlFor="officialPassword">Enter Password:</label>
            <input type="password" id="officialPassword" value={officialPassword} onChange={handleOfficialPasswordChange} />
          </div>
        )}
        <button type="submit">Login</button>
      </form>
      <style>{`
        .login-form {
          max-width: 400px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 24px;
          color: #333;
        }
        label {
          display: block;
          margin-bottom: 10px;
          font-weight: bold;
          color: #333;
        }
        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 3px;
          box-sizing: border-box;
        }
        button {
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Login;
