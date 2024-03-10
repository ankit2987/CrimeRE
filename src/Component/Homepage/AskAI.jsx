import React, { useState } from 'react';

export const AskAI = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const apiKey = 'YOUR_API_KEY'; // Replace with your ChatGPT-3 API key

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'text-davinci-003', // ChatGPT-3 model
          prompt: question,
          max_tokens: 150 // Adjust token limit as needed
        })
      });
      const responseData = await response.json();
      setResponse(responseData.choices[0].text);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error here
    }
  };

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  return (
    <div className="ask-ai-container">
      <h1>Ask for AI Assistance</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Ask your question:</label>
        <textarea id="question" value={question} onChange={handleChange} rows={4} />
        <button type="submit">Ask</button>
      </form>
      {response && (
        <div className="response-container">
          <h2>AI Response:</h2>
          <p>{response}</p>
        </div>
      )}
      <style>{`
        .ask-ai-container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 10px;
        }
        textarea {
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 3px;
          resize: vertical;
        }
        button {
          padding: 12px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 3px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
        .response-container {
          margin-top: 20px;
          padding: 15px;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        h2 {
          margin-bottom: 10px;
        }
        p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};


