import React from 'react';

export const AskAI = () => {
  return (
    <div className="iframe-container">
      <iframe
        title="AILawyerPro Chat"
        src="https://app.ailawyer.pro/chats/1"
        width="100%"
        height="600px" // Adjust the height as needed
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default AskAI;
