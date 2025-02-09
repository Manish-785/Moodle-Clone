import './rotatingcards.css'
import React, { useState } from "react";
<<<<<<< Updated upstream
function RotatingCards(){
=======

function RotatingCards(props){
>>>>>>> Stashed changes
    const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
<<<<<<< Updated upstream
    <div className="carousel-container">
=======
    <div className="carousel-container" style={{
      marginLeft: props.isOpen ? '250px' : '0',
      transition: 'margin-left 0.3s ease-in-out',
      padding: '20px',
    }}>
      <h3 id="tag">{props.heading}</h3>
>>>>>>> Stashed changes
      <div className="card-stack">
        {cards.map((card, index) => {
          const position = (index - currentIndex + cards.length) % cards.length;
          return (
            <div
              key={index}
              className={`card card-${position}`}
            >
              {card}
            </div>
          );
        })}
      </div>
      <button className="next-button" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};


export default RotatingCards