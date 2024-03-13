import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  margin: 20px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CrimeReporting = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    complainant: {
      name: '',
      contactInformation: {
        phoneNumber: '',
        emailAddress: ''
      },
      address: '',
      identification: ''
    },
    incidentDetails: {
      dateTime: '',
      location: '',
      typeOfCrime: '',
      description: ''
    },
    witnessInformation: [{
      name: '',
      contactInformation: {
        phoneNumber: '',
        emailAddress: ''
      }
    }],
    suspectInformation: {
      name: '',
      description: '',
      relationshipToComplainant: '',
      contactInformation: {
        phoneNumber: '',
        emailAddress: ''
      }
    },
    evidenceDocuments: {
      documents: [],
      physicalEvidence: []
    },
    policeStationInformation: {
      jurisdictionalPoliceStation: '',
      contactInformation: ''
    },
    additionalDetails: '',
    declaration: {
      accuracyStatement: false,
      consent: false
    }
  });

  // Handle form input change
  const handleInputChange = (section, field, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [section]: {
        ...prevFormData[section],
        [field]: value
      }
    }));
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data to backend or perform other actions
    console.log(formData);
  };

  return (
    <Container>
      <h2>Report FIR</h2>
      <Form onSubmit={handleSubmit}>
        {/* Complainant Details */}
        <div>
          <h3>Complainant Details</h3>
          <Label>Complainant Name</Label>
          <Input
            type="text"
            value={formData.complainant.name}
            onChange={(e) => handleInputChange('complainant', 'name', e.target.value)}
          />
          <Label>Complainant Phone Number</Label>
          <Input
            type="text"
            value={formData.complainant.contactInformation.phoneNumber}
            onChange={(e) => handleInputChange('complainant', 'contactInformation', { ...formData.complainant.contactInformation, phoneNumber: e.target.value })}
          />
          <Label>Complainant Email Address</Label>
          <Input
            type="text"
            value={formData.complainant.contactInformation.emailAddress}
            onChange={(e) => handleInputChange('complainant', 'contactInformation', { ...formData.complainant.contactInformation, emailAddress: e.target.value })}
          />
          <Label>Complainant Address</Label>
          <TextArea
            value={formData.complainant.address}
            onChange={(e) => handleInputChange('complainant', 'address', e.target.value)}
          ></TextArea>
          <Label>Complainant Identification</Label>
          <Input
            type="text"
            value={formData.complainant.identification}
            onChange={(e) => handleInputChange('complainant', 'identification', e.target.value)}
          />
        </div>

      
<div>
  <h3>Incident Details</h3>
  <Label>Date and Time</Label>
  <Input
    type="datetime-local"
    value={formData.incidentDetails.dateTime}
    onChange={(e) => handleInputChange('incidentDetails', 'dateTime', e.target.value)}
  />
  <Label>Location</Label>
  <Input
    type="text"
    value={formData.incidentDetails.location}
    onChange={(e) => handleInputChange('incidentDetails', 'location', e.target.value)}
  />
  <Label>Type of Crime</Label>
  <Input
    type="text"
    value={formData.incidentDetails.typeOfCrime}
    onChange={(e) => handleInputChange('incidentDetails', 'typeOfCrime', e.target.value)}
  />
  <Label>Description</Label>
  <TextArea
    value={formData.incidentDetails.description}
    onChange={(e) => handleInputChange('incidentDetails', 'description', e.target.value)}
  ></TextArea>
</div>


<div>
  <h3>Witness Information</h3>
  {formData.witnessInformation.map((witness, index) => (
    <div key={index}>
      <Label>Witness {index + 1} Name</Label>
      <Input
        type="text"
        value={witness.name}
        onChange={(e) => handleInputChange('witnessInformation', index, { ...witness, name: e.target.value })}
      />
      <Label>Witness {index + 1} Phone Number</Label>
      <Input
        type="text"
        value={witness.contactInformation.phoneNumber}
        onChange={(e) => handleInputChange('witnessInformation', index, { ...witness, contactInformation: { ...witness.contactInformation, phoneNumber: e.target.value } })}
      />
      <Label>Witness {index + 1} Email Address</Label>
      <Input
        type="text"
        value={witness.contactInformation.emailAddress}
        onChange={(e) => handleInputChange('witnessInformation', index, { ...witness, contactInformation: { ...witness.contactInformation, emailAddress: e.target.value } })}
      />
    </div>
  ))}
  <Button onClick={() => setFormData(prevState => ({ ...prevState, witnessInformation: [...prevState.witnessInformation, { name: '', contactInformation: { phoneNumber: '', emailAddress: '' } }] }))}>Add Witness</Button>
</div>



<div>
  <h3>Suspect Information</h3>
  <Label>Suspect Name</Label>
  <Input
    type="text"
    value={formData.suspectInformation.name}
    onChange={(e) => handleInputChange('suspectInformation', 'name', e.target.value)}
  />
  <Label>Suspect Description</Label>
  <TextArea
    value={formData.suspectInformation.description}
    onChange={(e) => handleInputChange('suspectInformation', 'description', e.target.value)}
  ></TextArea>
  <Label>Relationship to Complainant</Label>
  <Input
    type="text"
    value={formData.suspectInformation.relationshipToComplainant}
    onChange={(e) => handleInputChange('suspectInformation', 'relationshipToComplainant', e.target.value)}
  />
  <Label>Suspect Phone Number</Label>
  <Input
    type="text"
    value={formData.suspectInformation.contactInformation.phoneNumber}
    onChange={(e) => handleInputChange('suspectInformation', 'contactInformation', { ...formData.suspectInformation.contactInformation, phoneNumber: e.target.value })}
  />
  <Label>Suspect Email Address</Label>
  <Input
    type="text"
    value={formData.suspectInformation.contactInformation.emailAddress}
    onChange={(e) => handleInputChange('suspectInformation', 'contactInformation', { ...formData.suspectInformation.contactInformation, emailAddress: e.target.value })}
  />
</div>


        {/* Evidence Documents */}
        <div>
          <h3>Evidence Documents</h3>
          {/* Add input fields for evidence documents */}
        </div>

        {/* Police Station Information */}
        <div>
          <h3>Police Station Information</h3>
          {/* Add input fields for police station information */}
        </div>

        {/* Additional Details */}
        <div>
          <h3>Additional Details</h3>
          {/* Add input fields for additional details */}
        </div>

        {/* Declaration */}
        <div>
          <h3>Declaration</h3>
          {/* Add input fields for declaration */}
        </div>

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};


