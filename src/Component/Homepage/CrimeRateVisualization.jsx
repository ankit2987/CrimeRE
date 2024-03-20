import React from 'react';

const CrimeRateVisualization = () => {
  const styles = `
  .crime-rate-container {
    width: 100%; /* Take full width of the screen */
    border: 0px solid #ccc; /* Add border */
    margin: 25px auto; /* Center horizontally */
    max-width: 1250px; /* Limit maximum width */
    display: block; /* Ensure it behaves like a block element */
  }
  

    .crime-rate-container iframe {
      width: 100%;
      height: 991px;
      display: block;
      margin: 10px;
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
