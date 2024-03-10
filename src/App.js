import React, {Component} from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import {Hom} from './Component/Homepage/Hom';
import {Login} from './Component/Homepage/Login.jsx';
import {AskAI} from './Component/Homepage/AskAI.jsx';
import {News} from './Component/Homepage/News.jsx';
import {HomePage} from './Component/Homepage/HomePage.jsx'
import { UserHomepage } from './Component/USER/UserHomepage.jsx';
import {CrimeReporting} from './Component/USER/CrimeReporting.jsx';
import {CrimeViz} from './Component/USER/CrimeViz.jsx';
import { CrimePrediction } from './Component/USER/CrimePrediction.jsx';



function App() {
  return (
    <Routes>
    <Route path = '/' element = {<HomePage/>} ></Route>
    <Route path = 'Login' element = {<Login/>} ></Route>
    <Route path = 'AI' element = {<AskAI/>} ></Route>
    <Route path = 'News' element = {<News/>} ></Route>
    <Route path = 'userHomepage' element = {<UserHomepage/>} ></Route>
    <Route path = 'crime-report' element = {<CrimeReporting/>} ></Route>
    <Route path = 'crime-map' element = {<CrimeViz/>} ></Route>
    <Route path = 'crime-prediction' element = {<CrimePrediction/>} ></Route>
    </Routes>
    
  );
}

export default App;
