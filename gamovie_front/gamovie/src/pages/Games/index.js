import React, {useState,useEffect} from "react";
import getMovies from "services/getMovies";
import ListOfCards from "components/ListOfCards";

export default function Games(){
    const [cards, setCards] = useState([]);

  useEffect(function () {
    getMovies({content:'games'}).then((cards) => setCards(cards));
  }, []);

  return <ListOfCards cards={cards}/>;
}