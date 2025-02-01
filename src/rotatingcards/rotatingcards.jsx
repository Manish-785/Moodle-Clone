import './rotatingcards.css'
import React, { useState } from "react";
function RotatingCards(){
    const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="carousel-container">
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