import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import {RiMenu3Fill, RiCloseFill} from 'react-icons/ri';

const Menu = () => {
  return(
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#whatgpt3">What is GPT3</a></p>
      <p><a href="#openai">Open AI</a></p>
      <p><a href="#possibility">Case Studies</a></p>
      <p><a href="#library">Library</a></p> 
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='chatgpt3__navbar container-padding'>

      <div className='chatgpt3__navber-links'>
        <div className='chatgpt3__navbar-logo'> 
           <img src={logo} alt="logo" />
        </div>
        <div className='chatgpt3__navber-links_container'>
          <Menu />
        </div>
      </div>

      <div className='chatgpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>

      <div className='chatgpt3__navbar-menu'>
         <div className='chatgpt3__navbar-menu_icons'>
           {toggleMenu ? 
             <RiCloseFill size={30} onClick={() => setToggleMenu(false)}/> 
             :<RiMenu3Fill size= {30} onClick={() => setToggleMenu(true)}/>
           }

           {toggleMenu && (
               <div className='chatgpt3__navbar-links_small-container scale-up-center'>
                 <div className='chatgpt3__navbar-links_small'>
                  <Menu />
                 </div>
                 <div className='chatgpt3__navbar-sign_small'>
                   <p>Sign in</p>
                   <button type='button'>Sign Up</button>
                 </div>
           </div>
           )}
         </div>
        
      </div>
    </div>
  )
}

export default Navbar
