import React, { useState, useEffect } from 'react';

export const CrimeProfiling = () => {
  const [crimeProfiles, setCrimeProfiles] = useState([]);

  useEffect(() => {
    // Simulated JSON data
    const crimeData = [
      {
        "aadharId": "123456789012",
        "name": "John Doe",
        "age": 35,
        "gender": "Male",
        "address": "123 Main St, City, Country",
        "previousCrime": "Theft",
        "crimeDescription": "Stole items from a local store.",
        "warrant": true
      },
      {
        "aadharId": "987654321098",
        "name": "Jane Smith",
        "age": 28,
        "gender": "Female",
        "address": "456 Elm St, City, Country",
        "previousCrime": "Assault",
        "crimeDescription": "Got into a physical altercation with a neighbor.",
        "warrant": false
      },
      {
        "aadharId": "543216789012",
        "name": "Michael Johnson",
        "age": 42,
        "gender": "Male",
        "address": "789 Oak St, City, Country",
        "previousCrime": "Drug Possession",
        "crimeDescription": "Found in possession of illegal drugs.",
        "warrant": true
      }
    ];

    // Set the crime profiles from the JSON data
    setCrimeProfiles(crimeData);
  }, []);

  return (
    <div>
      <h1>Crime Profiling</h1>
      {crimeProfiles.map((profile, index) => (
        <div key={index} style={profileStyle}>
          <h2>Profile {index + 1}</h2>
          <p><strong>Aadhar ID:</strong> {profile.aadharId}</p>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Gender:</strong> {profile.gender}</p>
          <p><strong>Address:</strong> {profile.address}</p>
          <p><strong>Previous Crime:</strong> {profile.previousCrime}</p>
          <p><strong>Crime Description:</strong> {profile.crimeDescription}</p>
          <p><strong>Warrant:</strong> {profile.warrant ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

// CSS styles
const profileStyle = {
  border: '2px solid black',
  padding: '10px',
  marginBottom: '20px',
};

