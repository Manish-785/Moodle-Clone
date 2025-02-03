import React from 'react'
import { useState } from 'react'
import './landing.css'
const landing = () => {
  return (
    <>
    <div id='main-container'>

    <div id='container'>
             <div id='left-box' className='box'>
               <h2>WELCOME</h2>
               <h2>TO</h2>
               <h2>IIT BOMBAY</h2>
               <h2>MOODLE</h2>
             </div>

             <div id='right-box' className='box'>
               <p id='login-description'>Login with LDAP</p>
               <input type="text" id='ldap' className='form-input' placeholder='LDAP ID'/>
               <input type="password" id='password' className='form-input' placeholder='password'/>
               <button id='login-btn'>login</button>
               
             </div>
    </div>
       <div id='footer'>
         <a href="#">help and support</a>
         <a href="#">Contact us</a>
       </div>
   </div>
 </>
  )
}

export default landing
