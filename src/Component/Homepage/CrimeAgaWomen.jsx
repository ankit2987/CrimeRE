import React from 'react';
import styled from 'styled-components';

// Styled iframe component with CSS styles
const StyledIframe = styled.iframe`
  width: 560px;
  height: 315px;
  border: none; /* Remove iframe border */
  display: block;
  margin: auto;
`;

const CrimeAgaWomen = () => {
  return (
    <>
      <div className="crime-against-women">
        <StyledIframe
          src="https://www.youtube.com/embed/MyIj8SW7xx4?si=5BBXLSn6PxgXogbB"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></StyledIframe>
      </div>
    </>
  );
};

export default CrimeAgaWomen;
