import React, { useEffect, useState } from 'react';

export const CrimeViz = () => {
  const [visualizationType, setVisualizationType] = useState('state');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleVisualizationTypeChange = (type) => {
    setVisualizationType(type);
  };

  return (
    <div>
      <h2>Need for Crime Visualization</h2>
      <p>
        Crime visualization helps in understanding crime patterns, trends, and hotspots, which are crucial for
        law enforcement agencies, policymakers, and researchers to devise effective crime prevention strategies.
      </p>
      <div>
        <h3>Choose Visualization Type:</h3>
        <div>
          <label>
            <input
              type="radio"
              name="visualizationType"
              value="state"
              checked={visualizationType === 'state'}
              onChange={() => handleVisualizationTypeChange('state')}
            />
            Visualization by States
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="visualizationType"
              value="indiaMap"
              checked={visualizationType === 'indiaMap'}
              onChange={() => handleVisualizationTypeChange('indiaMap')}
            />
            Visualization of India Map
          </label>
        </div>
        {/* Add more visualization options as needed */}
      </div>

      <div className='tableauPlaceholder' id='viz1'>
        {visualizationType === 'state' ? (
          <iframe
            title='Dashboard 2'
            src='https://public.tableau.com/views/Map_17098009545160/Dashboard2?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:tabs=no&:toolbar=no&:display_static_image=yes&:display_spinner=no&:display_overlay=yes&:display_count=no&:language=en-US&publish=yes'
            width='800'
            height='600'
            allowFullScreen
          />
        ) : (
          <iframe
            title='Crimes in India'
            src='https://public.tableau.com/views/CrimesinIndia_17097922030150/CrimesinIndia?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:tabs=no&:toolbar=yes&:display_static_image=yes&:display_spinner=yes&:display_overlay=yes&:display_count=yes&:language=en-US&:loadOrderID=0'
            width='800'
            height='600'
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};
