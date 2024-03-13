import React from 'react'
import Navbar from './Navbar'
import CrimeCard from '../Homepage/CrimeCard'
import CrimeAnalysis from '../Homepage/CrimeAnalysis.jsx'
import CrimeRateVisualization from '../Homepage/CrimeRateVisualization.jsx'



export const Home = () => {
  return (<div>
    <Navbar/>
    <CrimeAnalysis/>
    <CrimeCard/>
    <CrimeRateVisualization/>

    </div>
    
   
  )
}
