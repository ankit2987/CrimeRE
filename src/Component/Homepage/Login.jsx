import React, { useState } from 'react';
import { Hom } from './Hom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logo from './images/24070702_bwink_bld_03_single_03-removebg.png';
import logo2 from './images/27884383_white_linen_texture.jpg';

export const Login = () => {
  const [loginType, setLoginType] = useState('user');
  const [aadharNumber, setAadharNumber] = useState('');
  const [officialUniqueId, setOfficialUniqueId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [officialPassword, setOfficialPassword] = useState('');  
;
  

  const handleLoginTypeChange = (type) => {
    setLoginType(type);
    
    setAadharNumber('');
    setOfficialUniqueId('');
    setUserPassword('');
    setOfficialPassword('');
  };

  const handleAadharNumberChange = (e) => {
    const value = e.target.value;
    
    const formattedValue = value
    .replace(/\D/g, '') // Remove non-digit characters
    .replace(/(\d{4})/g, '$1-') // Insert hyphens after every 4 digits
    .slice(0, 14); // Limit length to 14 characters
  
  setAadharNumber(formattedValue);
  
  // Remove hyphen if backspacing over it
  if (e.nativeEvent.inputType === 'deleteContentBackward' && value[e.target.selectionStart - 1] === '-') {
    setAadharNumber(formattedValue.slice(0, e.target.selectionStart - 1) + formattedValue.slice(e.target.selectionStart));
  }
};

  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleOfficialUniqueIdChange = (e) => {
    setOfficialUniqueId(e.target.value);
  };

  const handleOfficialPasswordChange = (e) => {
    setOfficialPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (loginType === 'user') {
      console.log('User login with Aadhar Number:', aadharNumber, 'and Password:', userPassword);
    } else {
      console.log('Official login with Unique ID:', officialUniqueId, 'and Password:', officialPassword);
    }
  };

  return (
    <div 
       style={{ backgroundImage: `url(${logo2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', height:695 , width:1535 , overflow: 'hidden'}}>
    
      <Hom />
      <div style={{ backgroundImage: `url(${logo})`, backgroundSize: 'auto 100%', backgroundRepeat: 'no-repeat', backgroundPosition: '85% -6000% ', minHeight: '95vh', maxWidth: '100vw',overflow: 'hidden', position: 'relative',  top: '33px', left: '30px'  }}></div>

      <div className="login-button-container">
        <button className="login-button" onClick={() => handleLoginTypeChange('user')}>User Login</button>
        <button className="login-button" onClick={() => handleLoginTypeChange('official')}>Official Login</button>
      </div>
      
      <form onSubmit={handleLoginSubmit} className="login-form">
        {loginType === 'user' ? (
          <div>
            <label htmlFor="aadharNumber">Enter Aadhar Card Number:</label>
            <input
              type="text"
              id="aadharNumber"
              value={aadharNumber}
              onChange={handleAadharNumberChange}
              placeholder="XXXX-XXXX-XXXX"
            />
            <label htmlFor="userPassword">Enter Password:</label>
            <div style={{ display: 'flex' }}>
              
            <input
  type={showPassword ? "text" : "password"}
  id="userPassword"
  value={userPassword}
  onChange={handleUserPasswordChange}
/>
<button
  type="button"
  className="password-toggle-button"
  onClick={() => setShowPassword(!showPassword)}
>
  <FontAwesomeIcon
    icon={showPassword ? faEyeSlash : faEye}
    style={{ fontSize: '16px', color: '#000' }} // Adjust the font size and color as needed
  />
</button>


              </div>
          </div>
        ) :
         (
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
    position: relative;
    top: -580px; /* Adjust as needed */
    left: -200px; /* Adjust as needed */
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    background-color: #fff;
  }
  
  .password-input-container {
    position: relative;
    width: 0px; /* Adjust width as needed */
    height: 0px; /* Adjust height as needed */
  }

  .password-input {
    width: 10%; /* Adjust width as needed */
    padding: 0px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 50px;
    position: relative;
  }

  .password-input input {
    width: -150;
    border: none;
    outline: 0; /* Remove the outline on focus */
    padding-right: 40px; /* Ensure space for the eye icon */
  }

  .password-toggle-button {
    padding : 0px;
    width: 2%;
    display: inline-block;
    position: absolute;
    top: 54.4%;
    right: 50px; /* Adjust the positioning as needed */
    transform: translateY(58%);
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1;
    color: #000;
    box-shadow: 0 0 0 1px transparent !important; /* Ensure the style takes precedence */
  }

  .login-button-container {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    
  }

  .login-button {
    position: relative;
    top: -560px; /* Adjust as needed */
    left: -200px; /* Adjust as needed */
    width: 150px; /* Adjust width as needed */
    margin: 0 10px; /* Adjust margin as needed */
    padding: 12px;
    background-color: #333333;
    color: #fff;
    border: 0px solid #0056b3;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    margin-top: 100px;
  }

  /* Make login button blue on hover */
  .login-button:hover {
    background-color: #0056b3 !important;
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
    border-radius: 50px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 12px;
    background-color: #333333;
    color: #fff;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  /* Make login button darker on hover */
  .login-button-container .login-button:hover,
  .login-button-container .login-button:hover:not(:disabled) {
    background-color: #0056b3 !important;
  }
  .login-button-container .login-button:hover,
  .login-button-container .login-button:hover:not(:disabled) {
    background-color: #0056b3;
  }
`}</style>
    </div>
  );
};

export default Login;
