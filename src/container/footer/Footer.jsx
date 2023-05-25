import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='chatgpt3__footer container-padding'>
       <div className='chatgpt3__footer-heading'>
        <h1>Do you want to step in to the future before others</h1>
        <p>Request Early Access</p>
       </div>
       <div className='chatgpt3__footer-link_container'>
          <div>
            <img src={logo} alt="logo" />
            <p className='chatgpt__location'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div>
             <h3>Links</h3>
             <ul>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
             </ul>
          </div>
          <div>
          <h3>Contact</h3>
             <ul>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
             </ul>
          </div>
          <div>
          <h3>Get in touch</h3>
             <ul>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
             </ul>
          </div>
       </div>
       <div className='chatgpt3__lastItem'>
        <p>© 2021 GPT-3. All rights reserved.</p>
       </div>
    </div>
  )
}

export default Footer
