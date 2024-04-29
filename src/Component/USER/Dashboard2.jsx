import React from 'react';

const Dashboard2 = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <iframe
        title="Dashboard 2"
        src="https://public.tableau.com/views/CrimeRateIndia_17102512365960/CrimeRate?:showVizHome=no&:embed=true"
        width="1300"
        height="927"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Dashboard2;
