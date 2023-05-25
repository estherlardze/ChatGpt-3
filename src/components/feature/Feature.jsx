import React from 'react';
import './feature.css';

const Feature = ({title, text}) => {
  return ( 
       <div className='chatgpt3__feature-content'>
        <div className='chatgpt3__feature-heading'>
          <div className='chatgpt3__feature-bar'></div>
           <h1>{title}</h1>
        </div>
        <div className='chatgpt3__feature-text'>
            <p>{text}</p>
        </div>
       </div>
  )
}

export default Feature
