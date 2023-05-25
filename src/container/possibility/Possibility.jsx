import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibility.png';


const Possibility = () => {
  return (
    <div className='chatgpt3__possibility container-margin' id='possibility'>
      <div className='chatgpt3__possibility-image'>
         <img src={possibility} alt="Possibility" />
      </div>
      <div className='chatgpt3__possibility-content'>
         <h5>Request Early Access to Get Started</h5>
          <h1>The possibilities are beyond your imagination</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not
             thoughts all exercise blessing. Indulgence way everything joy alteration 
             boisterous the attachment. Party we years to order allow asked of.</p>
             <h5>Request Early Access to Get Started</h5>
      </div>
    </div>
  )
}

export default Possibility
