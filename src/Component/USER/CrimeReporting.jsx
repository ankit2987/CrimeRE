import React, { useState } from 'react';
import styled from 'styled-components'; 
import { UserHomepage } from './UserHomepage';
import pic from './Project_16-09.jpg';

// Styled components
const Container = styled.div`
  padding: 0 300px 70px;
  margin: 20px;
  top: 510px;
  left: 50px;
  position: absolute;
  width: 800px;
`;

const Container1 = styled.div`
  padding: 0 280px 70px;
  margin: 20px;
  top: 238px;
  left: 50px;
  position: absolute;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;



const FormGroup1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
`;

const FormGroup2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width : 45%;
`;

const FormGroup3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 28.6%;
  position: absolute;
  top: 3%;
  left: 50%;
`;

const FormGroup4 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width : 100%;
`;

const FormGroup5 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup6 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup7 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 50px;
`;

const FormGroup8 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width : 100%;
`;

const FormGroup9 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup10 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup11 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup111 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup112 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width:
`;

const FormGroup12 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup13 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup14 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup15 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup16 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup17 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup18 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup19 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup20 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FormGroup21 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

`;





const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  border: 1.7px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin-top: 5px;
  border: 1.7px solid #ccc;
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

const StyledComponent = styled.div`
  background-image: url(${pic});
`;

const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const DateTimeLabel = styled(Label)`
  margin-top: 10px;
`;

const DateTimeInput = styled(Input)`
  margin-top: 5px;
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
    <>
      <StyledComponent />
      <UserHomepage/>
      
      <img src={pic} alt="Project 16-09" style={{ position: 'relative', top: '-40px' , left: '20px', width: '500px', height: 'auto', display: 'block', margin: '0 auto' }} />


      <h1 style={{textAlign: 'center' , position: 'relative', top: '-250px' , left: '20px'}}>Report FIR</h1>

      <Container1>

        <Form onSubmit={handleSubmit}>
          <FormGroup21>
            <Label style={{textAlign: 'center' }}>Instruction</Label>
            <ul style={{ padding: 0 }}>

            <li style={{ marginBottom: '1px' }}>

            <h6 style={{ margin: '0px'}}>
            

                  1. Fill out all required fields  (*).
                  **सभी आवश्यक फील्ड्स को भरें.**
            </h6>
            </li>
            <li style={{ marginBottom: '1px' }}>
<h6 style={{ margin: '0px'}}>
2. Provide accurate details about the crime incident, including date, time, and location.
   **अपराध के घटना से संबंधित सटीक विवरण प्रदान करें, जैसे कि तारीख, समय, और स्थान।**
</h6></li>
<li style={{ marginBottom: '1px' }}>
<h6 style={{ margin: '0px'}}>


3. If information about the perpetrator is unknown, leave those fields blank or enter "NA" (Not Available).
   **अगर अपराधी के बारे में जानकारी अज्ञात है, तो उन फील्ड को खाली छोड़ दें या "NA" (उपलब्ध नहीं) दर्ज करें।**
</h6></li>

<li style={{ marginBottom: '1px' }}><h6 style={{ margin: '0px'}}>
4. Attach any supporting documents, such as photos or videos, if available.
   **यदि संभावित हो, तो कोई सहायक दस्तावेज जोड़ें, जैसे कि फोटो या वीडियो।**
   </h6></li>

   <li style={{ marginBottom: '1px' }}><h6 style={{ margin: '0px'}}>
5. Review all information before submitting to ensure accuracy.
   **सटीकता सुनिश्चित करने के लिए सभी जानकारी की पुनः समीक्षा करें।**
   </h6></li>

<li style={{ marginBottom: '1px' }}><h6 style={{ margin: '0px'}}>
6. Click the "Submit" button to send your report.
   **अपनी रिपोर्ट भेजने के लिए "सबमिट" बटन पर क्लिक करें।**
</h6></li>
<li style={{ marginBottom: '1px' }}><h6 style={{ margin: '0px'}}>
7. Receive a confirmation message after submission.
   **सबमिशन के बाद पुष्टि संदेश प्राप्त करें।**
   </h6></li>
   <li style={{ marginBottom: '1px' }}><h6 style={{ margin: '0px'}}>
9. Remember that false information may have legal consequences.
   **ध्यान रखें कि गलत जानकारी के कानूनी परिणाम हो सकते हैं।**
   </h6></li>
   <li style={{ marginBottom: '1px' }}><h6 style={{ margin: '0px'}}>
10. Your privacy is important; all personal information will be kept confidential.
    **आपकी गोपनीयता महत्वपूर्ण है; सभी व्यक्तिगत जानकारी को गोपनीय रखा जाएगा।**
    </h6>
    </li>
            </ul>
          </FormGroup21>
        </Form>
      </Container1>

      <Container>
        <Form onSubmit={handleSubmit}>
          <FormGroup1>
            <h3 style={{textAlign: 'center'}}>Complainant Details</h3>
            <Label>Complainant Name</Label>
          </FormGroup1>
          <FormGroup2>
            <Input
              type="text"
              value={formData.complainant.name}
              onChange={(e) => handleInputChange('complainant', 'name', e.target.value)}
            />
          </FormGroup2>
          <FormGroup3>
            <Label>Complainant Phone Number</Label>
            <Input
              type="text"
              value={formData.complainant.contactInformation.phoneNumber}
              onChange={(e) => handleInputChange('complainant', 'contactInformation', { ...formData.complainant.contactInformation, phoneNumber: e.target.value })}
            />
          </FormGroup3>
          <FormGroup4>
            <Label>Complainant Email Address</Label>
            <Input
              type="text"
              value={formData.complainant.contactInformation.emailAddress}
              onChange={(e) => handleInputChange('complainant', 'contactInformation', { ...formData.complainant.contactInformation, emailAddress: e.target.value })}
            />
          </FormGroup4>
          <FormGroup5>
            <Label>Complainant Address</Label>
            <TextArea
              value={formData.complainant.address}
              onChange={(e) => handleInputChange('complainant', 'address', e.target.value)}
            ></TextArea>
          </FormGroup5>
          <FormGroup6>
            <Label>Complainant Identification</Label>
            <Input
              type="text"
              value={formData.complainant.identification}
              onChange={(e) => handleInputChange('complainant', 'identification', e.target.value)}
            />
          </FormGroup6>
          <FormGroup7>
            <h3 style={{textAlign: 'center'}}>Incident Details</h3>
            <DateTimeContainer>
              <DateTimeLabel>Date and Time</DateTimeLabel>
              <DateTimeInput
                type="datetime-local"
                value={formData.incidentDetails.dateTime}
                onChange={(e) => handleInputChange('incidentDetails', 'dateTime', e.target.value)}
              />
            </DateTimeContainer>
          </FormGroup7>
          <FormGroup8>
            <Label>Location</Label>
            <Input
              type="text"
              value={formData.incidentDetails.location}
              onChange={(e) => handleInputChange('incidentDetails', 'location', e.target.value)}
            />
          </FormGroup8>
          <FormGroup9>
            <Label>Type of Crime</Label>
            <Input
              type="text"
              value={formData.incidentDetails.typeOfCrime}
              onChange={(e) => handleInputChange('incidentDetails', 'typeOfCrime', e.target.value)}
            />
          </FormGroup9>
          <FormGroup10>
            <Label>Description</Label>
            <TextArea
              value={formData.incidentDetails.description}
              onChange={(e) => handleInputChange('incidentDetails', 'description', e.target.value)}
            ></TextArea>
          </FormGroup10>
           
            <h3 style={{textAlign: 'center'}}>Witness Information</h3>
            {formData.witnessInformation.map((witness, index) => (
              <div key={index}>
          <FormGroup11>

                <Label>Witness {index + 1} Name</Label>
                <Input
                  type="text"
                  value={witness.name}
                  onChange={(e) => handleInputChange('witnessInformation', index, { ...witness, name: e.target.value })}
                />
          </FormGroup11>

          <FormGroup111>

                <Label>Witness {index + 1} Phone Number</Label>
                <Input
                  type="text"
                  value={witness.contactInformation.phoneNumber}
                  onChange={(e) => handleInputChange('witnessInformation', index, { ...witness, contactInformation: { ...witness.contactInformation, phoneNumber: e.target.value } })}
                />
          </FormGroup111>

          <FormGroup112>   
                <Label>Witness {index + 1} Email Address</Label>
                <Input
                  type="text"
                  value={witness.contactInformation.emailAddress}
                  onChange={(e) => handleInputChange('witnessInformation', index, { ...witness, contactInformation: { ...witness.contactInformation, emailAddress: e.target.value } })}
                />
          </FormGroup112>  
              </div>
            ))}
            <Button onClick={() => setFormData(prevState => ({ ...prevState, witnessInformation: [...prevState.witnessInformation, { name: '', contactInformation: { phoneNumber: '', emailAddress: '' } }] }))}>Add Witness</Button>
          
          <FormGroup12>
            <h3>Suspect Information</h3>
            <Label>Suspect Name</Label>
            <Input
              type="text"
              value={formData.suspectInformation.name}
              onChange={(e) => handleInputChange('suspectInformation', 'name', e.target.value)}
            />
          </FormGroup12>
          <FormGroup13>
            <Label>Suspect Description</Label>
            <TextArea
              value={formData.suspectInformation.description}
              onChange={(e) => handleInputChange('suspectInformation', 'description', e.target.value)}
            ></TextArea>
          </FormGroup13>
          <FormGroup14>
            <Label>Relationship to Complainant</Label>
            <Input
              type="text"
              value={formData.suspectInformation.relationshipToComplainant}
              onChange={(e) => handleInputChange('suspectInformation', 'relationshipToComplainant', e.target.value)}
            />
          </FormGroup14>
          <FormGroup15>
            <Label>Suspect Phone Number</Label>
            <Input
              type="text"
              value={formData.suspectInformation.contactInformation.phoneNumber}
              onChange={(e) => handleInputChange('suspectInformation', 'contactInformation', { ...formData.suspectInformation.contactInformation, phoneNumber: e.target.value })}
            />
          </FormGroup15>
          <FormGroup16>
            <Label>Suspect Email Address</Label>
            <Input
              type="text"
              value={formData.suspectInformation.contactInformation.emailAddress}
              onChange={(e) => handleInputChange('suspectInformation', 'contactInformation', { ...formData.suspectInformation.contactInformation, emailAddress: e.target.value })}
            />
          </FormGroup16>
          {/* Evidence Documents */}
          <FormGroup17>
            <h3>Evidence Documents</h3>
            {/* Add input fields for evidence documents */}
          </FormGroup17>
          {/* Police Station Information */}
          <FormGroup18>
            <h3>Police Station Information</h3>
            {/* Add input fields for police station information */}
          </FormGroup18>
          {/* Additional Details */}
          <FormGroup19>
            <h3>Additional Details</h3>
            {/* Add input fields for additional details */}
          </FormGroup19>
          {/* Declaration */}
          <FormGroup20>
            <h3>Declaration</h3>
            {/* Add input fields for declaration */}
          </FormGroup20>
          {/* Submit Button */}
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

