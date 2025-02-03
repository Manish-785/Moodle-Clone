import React from 'react'
import './signup.css'

const signup = () => {
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
                        <input type="text" className='form-input' placeholder='name' />
                        <input type="text" id='email' className='form-input' placeholder='email' />
                        <input type="text" id='ldap' className='form-input' placeholder='LDAP ID' />
                        <input type="password" id='password' className='form-input' placeholder='password' />
                        <button id='signup-btn'>SignUP</button> 
                    </div>
                </div>
                <div id='footer'>
                    <a href="#" className='footer-a'>help and support</a>
                    <a href="#" className='footer-a'>Contact us</a>
                </div>
            </div>
        </>
    )
}

export default signup
