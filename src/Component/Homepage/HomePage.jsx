import React from 'react'
import { Hom } from './Hom'
import { Link } from 'react-router-dom'
import CrimeCards from './CrimeCard'
import CrimeAgaWomen from './CrimeAgaWomen'
import CrimeRateVisualization from './CrimeRateVisualization'
import CrimeAnalysis from './CrimeAnalysis'

export const HomePage = () => {
  return (<div>
    <Hom/>
    
    <CrimeAnalysis/>
    <CrimeCards/>
    <CrimeRateVisualization/>
    
    <CrimeAgaWomen/>
    </div>


  )
}

