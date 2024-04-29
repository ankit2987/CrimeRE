import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import FIRData from './firdata.json';

export const Crimereports = () => {
  const [firData, setFirData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    setFirData(FIRData);
    setSearchResults(FIRData);
  }, []);

  const handleSearch = () => {
    const results = firData.filter(
      (fir) => fir.FirNo.includes(searchTerm) && fir.Status.includes(statusFilter)
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Navbar />
      <h2>Crime Reports</h2>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Search by FIR No"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ marginLeft: '10px' }}
        >
          <option value="">All</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>FIR No</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>User Email</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Aadhar Card</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Crime Category</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Evidence</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date and Time</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nearest Police Station</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((fir) => (
            <tr key={fir.FirNo}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{fir.FirNo}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{fir.UserEmail}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{fir.Name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{fir.AadharCard}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{fir.CrimeCategory}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{fir.Evidence}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{fir.DateTime}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{fir.Description}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{fir.NearestPoliceStation}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{fir.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
