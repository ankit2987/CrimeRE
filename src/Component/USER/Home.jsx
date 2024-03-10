// Home.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserHomepage } from './UserHomepage';

const Home = () => {
  return (
    <Routes>
      <Route path="/userHomepage" element={<UserHomepage />} />
    </Routes>
  );
}

export default Home;
