import React from "react";
import Card from "components/Card";

export default function ListOfCards({ cards }) {
  return cards.map(function(card) {
    console.log(cards)
    return <Card
    key={card.id}
    url={card.image}
    year={card.year}
    title={card.name}
  />
  });
  
}
