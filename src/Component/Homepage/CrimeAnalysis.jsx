import React from 'react';
import logo from './images/27884383_white_linen_texture.jpg';
import logo1 from './images/Analysis-amico.png';
import { Link } from 'react-router-dom';

const CrimeAnalysis = () => {
  const styles = `
    .crime-analysis-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start; /* Align items to the start of the flex container */
      padding: 20px;
      border: 0px solid #007bff; /* Added border */
      border-radius: 8px;
      
    }

    .crime-analysis-content {
      flex: 1;
      padding-right: 20px;
    }

    .crime-analysis-title {
      position: relative;
      left: 0%;
      top: 10px; /* Adjust top value to move the title up or down */
      font-size: 30px; 
      
      margin-bottom: 20px;
      text-align: center;
      color: #333333; 
    }
    .crime-analysis-title1 {
      position: relative;
      left: -150%;
      top: 10px; /* Adjust top value to move the title up or down */
      font-size: 45px; 
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
      color: #333333; 
    }

    .crime-analysis-text {
      font-size: 16px; /* Increased font size */
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .crime-analysis-img {
      max-width: 40%; /* Set the maximum width to ensure the image stays within the container */
      border-radius: 8px;
      position: relative;
      top: 5px;
      left: -65px;
      
    }

    .crime-analysis-list {
      position: relative;
      top: 220px;
      left: 300px;
    }

    .crime-analysis-list li {
      margin-bottom: 10px; /* Adjust margin-bottom to create a gap between list items */
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div 
       style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', height:692 , width:1515 , overflow: 'hidden'}}>
        <div className="crime-analysis-container">
          <div className="crime-analysis-content">
            <div className="crime-analysis-title" style={{ top: '180px' , left: '-50px' }}> <div className="crime-analysis-subtitle"  >Welcome to</div>
            <div className="crime-analysis-title1" style={{ left: '149.5px' , margin : '-20px' }}>Indian Crime Analysis</div></div>
            <ul className="crime-analysis-text crime-analysis-list">
              <li>Premier destination for comprehensive crime insights in India.</li>
              <li>Access accurate & up-to-date crime information.</li>
              <li>Explore crime data by region, offense type & time.</li>
              <li>Foster safer society through awareness & evidence-based decisions.</li>
              <li>Join us. Explore Indian Crime Analysis today.</li>
              <div style={{
                    position: 'relative',
                    display: 'inline-block',
                    padding: '10px',
                    background: 'black', // Change the color to black (rgba values for black)
                    borderRadius: '5px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(5px)',
                    height: '20px',
                    width: '120px',
                    position:' relative' ,
                        left: '130px',
                        top: '10px',
  
}}>
  <h2 style={{ margin: '0' }}>
    <Link to="/login" className="nav-link" style={{ textDecoration: 'none', color: 'white'  , position: 'relative' ,left: '30px' ,top: '-12px' , textAlign: 'center'}}>
      Login
    </Link>
  </h2>
</div>


            </ul>
          </div>
          <img
  className="crime-analysis-img"
  src={logo1}
  alt="Types of Crimes"
  style={{ position: 'relative', top: '50px', left: '-50px', width: '38%', height: '50%' }}
/>


        </div>
      </div>
    </>
  );
};

export default CrimeAnalysis;
