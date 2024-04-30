import React, { useEffect } from 'react';
import {UserHomepage} from './UserHomepage'


export const CrimePrediction = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1714394244312');
    const vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '100%';
    vizElement.style.height = `${divElement.offsetWidth * 0.75}px`;

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    // Cleanup function
    return () => {
      vizElement.parentNode.removeChild(scriptElement);
    };
  }, []);

  return (
    <>
    <UserHomepage/>

    <div style={{
        position: 'relative',
        top: '380px', 
        left: '50px', 
        display: 'inline-block',
        padding: '1px',
        background: 'white',
        
        height: '50px',
        width: '1400px',
      }}>
        </div>

    <div className='tableauPlaceholder' id='viz1714394244312' style={{ position: 'relative' }}>
      <noscript>
        <a href='#'>
          <img
            alt=' '
            src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;IP&#47;IPCCrimesinIndia_16380693145450&#47;TotalNo_OfIPCCrimes&#47;1_rss.png'
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className='tableauViz' style={{ display: 'none' }}>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='IPCCrimesinIndia_16380693145450&#47;TotalNo_OfIPCCrimes' />
        <param name='tabs' value='yes' />
        <param name='toolbar' value='yes' />
        <param
          name='static_image'
          value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;IP&#47;IPCCrimesinIndia_16380693145450&#47;TotalNo_OfIPCCrimes&#47;1.png'
        />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-US' />
      </object>
    </div>
    </>
  );
};


