import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='chatgpt3__header container-padding' id='home'>
       <div className='chatgpt3__header-content'>
        <div className='chatgpt3__header-content_text'>
          <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing.
             Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous
            the attachment. Party we years to order allow asked of.</p>
        </div>
         <div className='chatgpt3__header-input'>
           <input type="text" placeholder='Your email address' />
           <p>Get Started</p>
         </div>
         <div className='chatgpt3__header-people'>
            <img src={people} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
         </div>
       </div>
       <div className='chatgpt3__header-image'>
           <img src={ai} alt="ai" />
       </div>
    </div>
  )
}

export default Header
