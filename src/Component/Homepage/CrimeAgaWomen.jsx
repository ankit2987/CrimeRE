import React from 'react';

const CrimeAgaWomen = () => {
  const styles = `
    .crime-against-women .tableau-container {
      width: 100%; /* Take full width of the screen */
      border: 2px solid #ccc; /* Add border */
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="crime-against-women">
        <div className="tableau-container">
          <iframe
            title="Crime Against Women Visualization"
            width="100%"
            height="827"
            src="https://public.tableau.com/views/CRIMESININDIA/CRIMESININDIA?:embed=y&:display_count=yes&:showTabs=y&:showVizHome=no"
            frameBorder="1"
            style={{ display: 'block', margin: 'auto' }}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default CrimeAgaWomen;
