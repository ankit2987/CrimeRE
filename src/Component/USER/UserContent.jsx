import React from 'react'
import CrimeAnalysis from '../Homepage/CrimeAnalysis'
import CrimeRateVisualization from '../Homepage/CrimeRateVisualization'
import CrimeCard from '../Homepage/CrimeCard'
const UserContent = () => {
  return (
    <div>
    <CrimeAnalysis/>
    <CrimeCard/>
    <CrimeRateVisualization/>
    </div>
  )
}

export default UserContent