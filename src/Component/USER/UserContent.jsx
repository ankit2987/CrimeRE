import React from 'react'
import CrimeAnalysis from '../USER/CrimeAnalysislogin'
import CrimeRateVisualization from '../USER/CrimeRateVisualizationlogin'
import CrimeCard from '../USER/CrimeCardlogin'
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