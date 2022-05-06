import ListOfCards from "components/ListOfCards";
import { useState, useEffect } from "react";
import getMovies from "services/getMovies";
import React from "react";

export default function Movies() {
  const [cards, setCards] = useState([]);

  useEffect(function () {
    getMovies({content:'movies'}).then((cards) => setCards(cards));
  }, []);
  
  return <ListOfCards cards={cards}/>;
}
