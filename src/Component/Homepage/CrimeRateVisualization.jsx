import React from 'react';

const CrimeRateVisualization = () => {
  const styles = `
    .crime-rate-container {
      width: 100%; /* Take full width of the screen */
      border: 2px solid #ccc; /* Add border */
      margin: 0 auto; /* Center horizontally */
      max-width: 1216px; /* Limit maximum width */
    }

    .crime-rate-container iframe {
      width: 100%;
      height: 991px;
      display: block;
      margin: 0 auto;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="crime-rate-container">
        <iframe
          title="Crime Rate Visualization"
          src="https://public.tableau.com/views/CrimeRateIndia_17102512365960/CrimeRate?:embed=y&:display_count=yes&:showVizHome=no"
          frameBorder="0"
        ></iframe>
      </div>
    </>
  );
};

export default CrimeRateVisualization;
