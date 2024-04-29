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
  title="Crimes in India"
  src="https://public.tableau.com/views/CrimesinIndia_17097922030150/CrimesinIndia?:embed=y&:showVizHome=no"
  width="1300"
  height="927"
  frameborder="0"
  scrolling="yes"
></iframe>

      </div>
    </>
  );
};

export default CrimeRateVisualization;
