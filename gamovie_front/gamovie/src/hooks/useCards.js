import { useState, useEffect } from "react";
import getCards from "services/getCards";



export default function useCards({ content }) {
  const [loading, setLoading] = useState(false);
  const [loadginNextPage, setLoadingNextPage] = useState(false);
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(function () {
    setLoading(true);
    getCards({ content }).then(({ cards, totalPages }) => {
      console.log(cards)
      setCards(cards);
      setTotalPages(totalPages);
      setLoading(false);
    });
  }, [content]);

  useEffect(() => {
    setLoadingNextPage(true)
    getCards({ content, page }).then(({ cards }) => {
      setCards(cards);
      setLoadingNextPage(false);
    });
  }, [content, page])

  return { loading, loadginNextPage, cards, totalPages, setPage };
}
