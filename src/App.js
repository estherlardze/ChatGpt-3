import React from 'react';
import './App.css';

import {WhatGPT3, Features, Footer, Blog, Header, Possibility} from './container';
import { Brand, CTA, Navbar } from './components';



function App() {
  return (
    <div className="App">
       <div className='gradient-bg'>
        < Navbar/>
        < Header/>
      </div>   
     < Brand/>
       < WhatGPT3/>
      < Features/>
     < Possibility/>
      < CTA/>
       < Blog/>
      < Footer/>
    </div>
  );
}

export default App;
