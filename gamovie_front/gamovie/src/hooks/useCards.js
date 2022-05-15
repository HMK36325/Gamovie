import { useState, useEffect } from "react";
import getCards from "services/getCards";



export default function useCards({ content }) {
  const [loading, setLoading] = useState(false);
  const [loadginNextPage, setLoadingNextPage] = useState(false);
  const [cards, setCards] = useState([]);
  const [cat, setCat] = useState('not');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(function () {
    setLoading(true);
    getCards({ content }).then(({ cards, totalPages }) => {
      setCards(cards);
      setTotalPages(totalPages);
      setLoading(false);
    });
  }, [content]);

  useEffect(() => {
    setLoadingNextPage(true)
    getCards({ content, page, cat }).then(({ cards, totalPages }) => {
      setCards(cards);
      setTotalPages(totalPages)
      setLoadingNextPage(false);
    });
  }, [content, page, cat])

  return { loading, loadginNextPage, cards, totalPages, page, setPage, setCat};
}
