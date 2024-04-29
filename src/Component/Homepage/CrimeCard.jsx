import React from 'react';
import Profiling from './images/Data report-amico (1).png';
import Prediction from './images/Data report-pana.png';
import mapping from './images/Paper map-cuate.png'; 
import Management from './images/Data report-cuate (1).png'; 

const CrimeCard = ({ title, description, img }) => {
  const cardStyle = {
    background: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white', // Text color for better visibility on the background image
  };

  return (
    <div className="crime-card" style={cardStyle}>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const CrimeCards = () => {
  const styles = `
    .crime-cards-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top: 120px;
      margin-bottom: -150px; 
    }

    .crimecard {
      border: 0px solid #ccc;
      padding: 15px;
      margin: 10px;
      text-align: center;
      width: 700px;
      height: 200px; /* Adjust the height as needed */
      border-radius: 8px;
      position: relative;
      top: 5px;
      left: 500px;
    }

    .crimecard1 {
      border: 0px solid #ccc;
      padding: 15;
      margin: 10px;
      text-align: center;
      width: 700px;
      height: 300px; /* Adjust the height as needed */
      border-radius: 8px;
      
    }

    .crimecard2 {
      border: 0px solid #ccc;
      padding: 15px;
      margin: 10px;
      text-align: center;
      width: 700px;
      height: 200px; /* Adjust the height as needed */
      border-radius: 8px;
      
    }

    .crimecard3 {
      border: 0px solid #ccc;
      padding: 15px;
      margin: 10px;
      text-align: center;
      width: 700px;
      height: 200px; /* Adjust the height as needed */
      border-radius: 8px;
     
    }

    .card-content {
      background: rgba(0, 0, 0, 0); /* Add a semi-transparent background for better text visibility */
      padding: 10px;
      border-radius: 0 0 8px 8px; /* Apply border radius only to the bottom corners */
    }

    .card-content h3,
    .card-content p {
      color: black; /* Change the color of both title and description text to black */
    }

    .crime-card h3 {
      margin-bottom: 10px;
    }
    
  `;

  return (
    <div>
      <style>{styles}</style>
      {/* Crime Cards */}
      <div className="crime-cards-container">
      <div className="crimecard">
          <div className="card-content">
            <h3 style = {{position: 'relative' , top: '0px' , left: '-480px' }} >{"Crime Profiling"}</h3>
            <p  style = {{position: 'relative' , top: '0px' , left: '-401px' , margin: '-15px' }} >{"Crime profiling, also known as criminal profiling or offender profiling, is a method used by law enforcement agencies to identify characteristics and behavior patterns of potential suspects based on analysis of crime scenes and evidence. This practice integrates various disciplines such as psychology, criminology, and forensic science to create profiles of offenders. Profilers examine factors like modus operandi, victimology, and geographical patterns to develop hypotheses about the offender's demographics, personality traits, and possible motivations. While controversial, crime profiling can aid investigations by providing insights into the perpetrator's mindset, assisting in narrowing down suspect lists, and ultimately aiding in the apprehension of criminals."}</p>
          </div>
        </div>
        <img
        className="crimeprofiling"
        src={Profiling}
        alt="profile"
        style={{ maxWidth: '40%', borderRadius: '8px', position: 'relative', top: '-50px', left: '-1000px', width: '350px', height: '350px' }}
      />
        <div className="crimecard1">
          <div className="card-content">
            <h3 style = {{position: 'relative' , top: '-20px' , left: '500px' }} >{"Crime Prediction"}</h3>
            <p  style = {{position: 'relative' , top: '-20px' , left: '330px' , margin: '-15px' }}>{"Predict potential crime hotspots based on historical data and patterns."}</p>
          </div>
        </div>

        <img
        className="crimeprofiling"
        src={Prediction}
        alt="profile"
        style={{ maxWidth: '40%', borderRadius: '8px', position: 'relative', top: '-160px', left: '30px', width: '450px', height: 'auto' }}
      />
        
        <div className="crimecard2">
          <div className="card-content">
            <h3  style = {{position: 'relative' , top: '-170px' , left: '50px' }} >{"Crime Mapping"}</h3>
            <p   style = {{position: 'relative' , top: '-170px' , left: '253px' , margin: '-15px' }}>{"Crime mapping is a technique used by law enforcement agencies to visualize and analyze spatial patterns of criminal activity within a geographical area. By plotting incidents of crime on maps, authorities can identify high-crime areas, trends, and hotspots. This information aids in resource allocation, strategic deployment of law enforcement personnel, and development of targeted crime prevention strategies. Advanced mapping technologies and geographic information systems (GIS) allow for the integration of various data sources to create comprehensive crime maps, facilitating informed decision-making in crime management."}</p>
          </div>
        </div>

        <img
        className="crimeprofiling"
        src={mapping}
        alt="profile"
        style={{ maxWidth: '40%', borderRadius: '8px', position: 'relative', top: '-250px', left: '-970px', width: '370px', height: '370px' }}
      />

        <div className="crimecard3">
          <div className="card-content">
            <h3  style = {{position: 'relative' , top: '-235px' , left: '180px' }} >{"Crime Management"}</h3>
            <p   style = {{position: 'relative' , top: '-235px' , left: '0px' , margin: '-15px' }}>{"Crime management involves a multifaceted approach to addressing criminal activities within a community. Through proactive measures such as prevention programs and community policing initiatives, authorities aim to deter criminal behavior. Investigations rely on advanced techniques and cooperation among law enforcement agencies to identify and prosecute offenders. Additionally, rehabilitation efforts seek to reintegrate offenders into society and prevent recidivism. Collaboration between law enforcement, government agencies, and the community is essential for effective crime management."}</p>
          </div>

          <img
        className="crimeprofiling"
        src={Management}
        alt="profile"
        style={{ maxWidth: '55%', borderRadius: '8px', position: 'relative', top: '-400px', left: '450px', width: '600px', height: '390px' }}
      />

        </div>  
      </div>
    </div>
  );
};

export default CrimeCards;
