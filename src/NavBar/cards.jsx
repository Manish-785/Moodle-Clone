import './cards.css'
import React, { useState } from 'react';

function Card(props) {
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div style={{ margin: '20px' }}>
      <div
        onClick={toggleDropdown}
        className="closed"
      >&nbsp;
        <span>{props.name}</span>
        <span>{isOpen ? '▲' : '▼'}</span> 
      </div>

      {isOpen && (
        <div
          style={{
            position: 'relative',
            top: '30px',
            padding: '10px',
            borderRadius:'4px',
            border: '1px solid lightgray',
            width: '190px',
            backgroundColor: 'lightgray',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
            <a href="#elements" style={{color:'black',}}>{props.element}</a>
        </div>
      )}
    </div>
  );
};

export default Card
