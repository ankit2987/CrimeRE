import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar'; // Make sure to import Navbar correctly
import mockData from './mockData.json'; // Import JSON data

// Styled components
const Container = styled.div`
  margin: 20px;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 5px;
`;

const InputField = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Error = styled.p`
  color: red;
`;

const DataContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const DataTitle = styled.h3`
  margin-bottom: 10px;
`;

export const CrimeProfiling = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetchData = () => {
    // Simulate fetching data from JSON
    const fetchedData = mockData.find(item => item.aadharNumber === aadharNumber);

    if (fetchedData) {
      setData(fetchedData);
      setError('');
    } else {
      setData(null);
      setError('No data found for the provided Aadhar card number.');
    }
  };

  const handleInputChange = (event) => {
    setAadharNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <Navbar />
      <Container>
        <h2>Enter Aadhar Card Number</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            value={aadharNumber}
            onChange={handleInputChange}
            placeholder="Enter Aadhar Card Number"
          />
          <SubmitButton type="submit">Fetch Data</SubmitButton>
        </form>
        {error && <Error>{error}</Error>}
        {data && (
          <DataContainer>
            <DataTitle>Aadhar Data</DataTitle>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Address:</strong> {data.address}</p>
            <p><strong>Previous Crime:</strong> {data.previousCrime}</p>
            <p><strong>Description of the Crime:</strong> {data.description}</p>
            <p><strong>Warrant Status:</strong> {data.warrant ? 'Yes' : 'No'}</p>
            {/* Add more data fields as needed */}
          </DataContainer>
        )}
      </Container>
    </div>
  );
};
