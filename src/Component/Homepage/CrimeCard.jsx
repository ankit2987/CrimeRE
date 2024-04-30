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
            <h3 style = {{position: 'relative' , top: '-200px' , left: '-0px' }} >{"Crime Profiling"}</h3>
            <div style={{ position: 'relative', top: '-185px', left: '0px', margin: '-15px', textAlign: 'justify' }}>
  <ul>
  <li style={{ marginBottom: '13px' }}>Crime profiling, also known as criminal profiling or offender profiling, is a method used by law enforcement agencies to identify characteristics and behavior patterns of potential suspects based on analysis of crime scenes and evidence.</li>
    <li style={{ marginBottom: '13px' }}>This practice integrates various disciplines such as psychology, criminology, and forensic science to create profiles of offenders.</li>
    <li style={{ marginBottom: '13px' }}>Profilers examine factors like modus operandi, victimology, and geographical patterns to develop hypotheses about the offender's demographics, personality traits, and possible motivations.</li>
    <li style={{ marginBottom: '13px' }}>While controversial, crime profiling can aid investigations by providing insights into the perpetrator's mindset, assisting in narrowing down suspect lists, and ultimately aiding in the apprehension of criminals.</li>
  </ul>
</div>
</div>
        </div>
        <img
        className="crimeprofiling"
        src={Profiling}
        alt="profile"
        style={{ maxWidth: '40%', borderRadius: '8px', position: 'relative', top: '-135px', left: '-900px', width: '350px', height: '350px' }}
      />
       
        
        <div className="crimecard2">
          <div className="card-content">
            <h3  style = {{position: 'relative' , top: '-15px' , left: '505px' }} >{"Crime Mapping"}</h3>
            <div style={{ position: 'relative', top: '5px', left: '505px', margin: '-15px', textAlign: 'justify' }}>
  <ul>
    <li style={{ marginBottom: '13px' }}>Crime mapping is a technique used by law enforcement agencies to visualize and analyze spatial patterns of criminal activity within a geographical area.</li>
    <li style={{ marginBottom: '13px' }}>By plotting incidents of crime on maps, authorities can identify high-crime areas, trends, and hotspots.</li>
    <li style={{ marginBottom: '13px' }}>This information aids in resource allocation, strategic deployment of law enforcement personnel, and development of targeted crime prevention strategies.</li>
    <li style={{ marginBottom: '13px' }}>Advanced mapping technologies and geographic information systems (GIS) allow for the integration of various data sources to create comprehensive crime maps, facilitating informed decision-making in crime management.</li>
  </ul>
</div>

</div>
        </div>

        <img
        className="crimeprofiling"
        src={mapping}
        alt="profile"
        style={{ maxWidth: '40%', borderRadius: '8px', position: 'relative', top: '-15px', left: '-900px', width: '370px', height: '370px' }}
      />

        <div className="crimecard3">
          <div className="card-content">
            <h3  style = {{position: 'relative' , top: '110px' , left: '225px' }} >{"Crime Management"}</h3>
            <div style={{ position: 'relative', top: '130px', left: '225px', margin: '-15px', textAlign: 'justify' }}>
  <ul>
    <li style={{ marginBottom: '13px' }}>Crime management uses a multifaceted approach to tackle criminal activities.</li>
    <li style={{ marginBottom: '13px' }}>Authorities employ prevention programs and community policing to deter criminal behavior.</li>
    <li style={{ marginBottom: '13px' }}>Investigations utilize advanced techniques and cooperation among law enforcement agencies.</li>
    <li style={{ marginBottom: '13px' }}>Rehabilitation efforts aim to reintegrate offenders into society and prevent recidivism.</li>
    <li style={{ marginBottom: '13px' }}>Collaboration between law enforcement, government agencies, and the community is crucial for effectiveness.</li>
  </ul>
</div>
</div>

          <img
        className="crimeprofiling"
        src={Management}
        alt="profile"
        style={{ maxWidth: '55%', borderRadius: '8px', position: 'relative', top: '-170px', left: '-430px', width: '600px', height: '390px' }}
      />

        </div>  
      </div>
    </div>
  );
};

export default CrimeCards;
