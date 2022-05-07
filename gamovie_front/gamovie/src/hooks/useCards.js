import { useState, useEffect } from "react";
import getCards from "services/getCards";

export default function useCards({ content }) {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(function () {
    setLoading(true);
    getCards({ content }).then((cards) => {
      setCards(cards);
      setLoading(false);
    });
  }, [content]);

  return { loading, cards };
}
