import React from 'react'
import './style.css'

const about = (props) => {
  return (
    <div id='about-box'>
      <ul id='question'>  

      <li className='student-data'>Roll Number:  {props.rollnumber} </li>
      <hr />
      <li className='student-data'>Academic Year:  {props.year} </li>
      <hr />
      <li className='student-data'>Department:  {props.department} </li> 

      </ul>

    </div>
  )
}

export default about