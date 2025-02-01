import React from 'react'
import './style.css'

const about = (props) => {
  return (
    <div id='about-box'>
      <ul id='question'>  

      <li>name </li>
      <li>email </li>
      <li>department </li>
      <li>ldapid </li>
      <li>mobile number </li> 

      </ul> 

      <ul id='answer'>  
      <li>{props.name}</li>
      <li>{props.email}</li>
      <li>{props.department}</li>
      <li>{props.ldapid}</li>
      <li>{props.mobilenumber}</li>  

      </ul>
    </div>
  )
}

export default about