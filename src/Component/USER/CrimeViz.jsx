import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserHomepage } from './UserHomepage';

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

  const Rectangle = ({ width, height, color, top, left }) => {
    return (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: color,
          border: '1px solid black',
          margin: '20px auto',
          position: 'absolute',
          top: `${top}px`,
          left: `${left}px`,
        }}
      ></div>
    );
  };

  return (
    <>
      <UserHomepage />
      <div>
        <h2 style={{ textAlign: 'center' }}>Need for Crime Visualization</h2>
        <p style={{ textAlign: 'center' }}>
          Crime visualization helps in understanding crime patterns, trends, and hotspots, which are crucial for
          law enforcement agencies, policymakers, and researchers to devise effective crime prevention strategies.
        </p>

        <div>
          <h3 style={{ textAlign: 'center' }}>Choose Visualization Type:</h3>
          <div style={{ textAlign: 'center' }}>
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

          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative' }}>
                <Rectangle width={100} height={50} color="blue" top={0} left={50} />
                <Rectangle width={100} height={50} color="green" top={100} left={150} />
              </div>
            </div>
            <labeL>
              <input
                type="radio"
                name="visualizationType"
                value="indiaMap"
                checked={visualizationType === 'indiaMap'}
                onChange={() => handleVisualizationTypeChange('indiaMap')}
              />
              Visualization of India Map
            </labeL>
          </div>
        </div>

        <div className='tableauPlaceholder' id='viz1' style={{ textAlign: 'center' }}>
          {visualizationType === 'state' ? (
            <iframe
              title='Dashboard 2'
              src='https://public.tableau.com/views/Map_17098009545160/Dashboard2?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:tabs=no&:toolbar=no&:display_static_image=yes&:display_spinner=no&:display_overlay=yes&:display_count=no&:language=en-US&publish=yes'
              width='50%'
              height='600'
              allowFullScreen
              style={{ border: 'none', margin: '0 auto' }}
            />
          ) : (
            <iframe
              title='Crimes in India'
              src='https://public.tableau.com/views/CrimesinIndia_17097922030150/CrimesinIndia?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:tabs=no&:toolbar=yes&:display_static_image=yes&:display_spinner=yes&:display_overlay=yes&:display_count=yes&:language=en-US&:loadOrderID=0'
              width='1500'
              height='1000'
              allowFullScreen
              style={{ border: 'none', margin: '0 auto' }}
            />
          )}
          <p><Link to="/Other">Crime Map</Link></p>
        </div>
      </div>
    </>
  );
};
