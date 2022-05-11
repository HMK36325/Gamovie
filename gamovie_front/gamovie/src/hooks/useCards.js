import { useState, useEffect } from "react";
import getCards from "services/getCards";

const INITIAL_PAGE = 0;

export default function useCards({ content }) {
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(false)
  const [loadginNextPage, setLoadingNextPage] = useState(false);
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);

  useEffect(function () {
    setLoading(true);
    getCards({ content }).then(({ cards }) => {
      setCards(cards);
      setLoading(false);
    });
  }, [content]);

  useEffect(function () {
    if (page < INITIAL_PAGE) return
    setLoadingNextPage(true)
    getCards({ content, page }).then(({ cards, isLast }) => {
      isLast ? setLastPage(true) : setLastPage(false);
      setCards(cards);
      setLoadingNextPage(false);
    });
  }, [content, page])

  return { loading, loadginNextPage, lastPage, cards, page, setPage };
}
