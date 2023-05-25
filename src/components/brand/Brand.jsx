import React from 'react';
import './brand.css';
import { google, slack, dropbox, atlassian, shopify } from './imports'

const Brand = () => {
  return (
    <div className='chatgpt3__brand container-padding'>
       <div>
         <img src={google} alt="google" />
       </div>

       <div>
        <img src={slack} alt="slack" />
       </div>

       <div>
        <img src={atlassian} alt="atlassian" />
       </div>

       <div>
        <img src={dropbox} alt="dropbox" />
       </div>

       <div>
        <img src={shopify} alt="shopify" />
       </div>
    </div>
  )
}

export default Brand
