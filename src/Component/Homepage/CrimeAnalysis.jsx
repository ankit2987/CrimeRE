import React from 'react';

const CrimeAnalysis = () => {
  const styles = `
    .crime-analysis-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      border: 2px solid #007bff; /* Added border */
      border-radius: 8px;
      background-color: #f8f9fa; /* Added background color */
    }

    .crime-analysis-content {
      flex: 1;
      padding-right: 20px;
    }

    .crime-analysis-title {
      font-size: 28px; /* Increased font size */
      font-weight: bold;
      margin-bottom: 20px;
      color: #007bff; /* Changed text color to blue */
    }

    .crime-analysis-text {
      font-size: 18px; /* Increased font size */
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .crime-analysis-img {
      flex: 1;
      max-width: 300px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Added box shadow */
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="crime-analysis-container">
        <div className="crime-analysis-content">
          <div className="crime-analysis-title">Explore Crime Trends in India</div>
          <div className="crime-analysis-text">
            Welcome to <strong>Indian Crime Analysis</strong>, your premier destination for comprehensive insights into crime trends and statistics across India. We are dedicated to providing you with accurate and up-to-date information on various aspects of crime, helping you better understand the dynamics of criminal activities in the country.
          </div>
          <div className="crime-analysis-text">
            Whether you're a concerned citizen or a professional researcher, our platform offers analytical tools and resources designed to empower individuals, policymakers, researchers, and law enforcement agencies with the knowledge they need to make informed decisions and take proactive measures to address and prevent crime.
          </div>
          <div className="crime-analysis-text">
            Explore crime data by region, type of offense, time period, and various other parameters, gaining valuable insights into the factors contributing to crime and the effectiveness of crime prevention initiatives.
          </div>
          <div className="crime-analysis-text">
            Our mission is to foster a safer and more secure society by promoting awareness, transparency, and <strong>evidence-based decision-making</strong> in the field of crime prevention and law enforcement.
          </div>
          <div className="crime-analysis-text">
            Join us in our endeavor to make India a safer place for all its citizens. Explore <strong>Indian Crime Analysis</strong> today and take a step towards a better understanding of crime in India.
          </div>
        </div>
        <img className="crime-analysis-img" src="https://legalvidhiya.com/wp-content/uploads/2022/01/Screenshot-2022-01-23-191301-2-1024x608.png" alt="Types of Crimes" />
      </div>
    </>
  );
};

export default CrimeAnalysis;
