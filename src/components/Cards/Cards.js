import React from "react";
import Card from '../Card/Card'

const Cards = (props) => {
  return (
    <div className="cards">
      {props.cards.map((card, index) => {
            return (
                <Card 
                key={index} 
                titleCard={card.titleCard} 
                subtitleCard={card.subtitleCard} 
                valueCard={card.valueCard} 
                percentageCard={card.percentageCard}/>
            )
        })}
    </div>
  );
}

export default Cards;