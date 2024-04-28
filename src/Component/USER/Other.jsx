import React from 'react';
import Navbar from '../Officials/Navbar';
export const Other = () => {
  return (
    <div>
    <Navbar/>
      {/* First div */}
      <div style={divStyle}>
        <h2>Explanation about crimes in India within the state</h2>
        <p>
          Add your explanation about crimes in India within the state here...
        </p>
      </div>
      {/* Second div */}
      <div style={divStyle}>
        <h2>Crime rate according to state</h2>
        <p>
          Add your explanation about crime rate according to state here...
        </p>
        <iframe
          title='Crime rate according to state'
          src='https://public.tableau.com/views/Map_17098009545160/Dashboard2?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:tabs=no&:toolbar=no&:display_static_image=yes&:display_spinner=no&:display_overlay=yes&:display_count=no&:language=en-US&publish=yes'
          width='800'
          height='600'
          allowFullScreen
          style={{ border: 'none', margin: '0 auto' }}
        />
      </div>
      {/* Third div */}
      <div style={divStyle}>
        <h2>More knowledge about the crime</h2>
        <p>
          Add your explanation about more knowledge about the crime here...
        </p>
        <iframe
          title='More knowledge about the crime'
          src='https://public.tableau.com/views/FinalProjectOnCrimesInIndia/Dashboard?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:site_root=&:name=FinalProjectOnCrimesInIndia%2FDashboard&:tabs=yes&:toolbar=yes&:display_static_image=yes&:display_spinner=yes&:display_overlay=yes&:display_count=yes&:language=en-US'
          width='1400'
          height='1000'
          allowFullScreen
          style={{ border: 'none', margin: '0 auto' }}
        />
      </div>
    </div>
  );
};

const divStyle = {
  border: '2px solid black',
  margin: '20px',
  padding: '20px',
  textAlign: 'center',
};
