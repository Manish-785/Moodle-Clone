import './rotatingcards.css'
import React, { useState } from "react";

function RotatingCards(props){
    const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="carousel-container2" style={{
      marginLeft: props.isOpen ? '250px' : '0',
      transition: 'margin-left 0.3s ease-in-out',
      padding: '20px',
    }}>
      <p id="tag">Recently Uploaded</p>
      <div className="card-stack2">
        {cards.map((card, index) => {
          const position = (index - currentIndex + cards.length) % cards.length;
          return (
            <div
              key={index}
              className={`cards cards-${position}`}
            >
              {card}
            </div>
          );
        })}
      </div>
      <button className="next-button2" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default RotatingCards