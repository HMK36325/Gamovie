import { useState, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import getCards from "services/getCards";

const defaultCat = atom({
  key: "myCat",
  default: "not"
})

const defaultPage = atom({
  key: "myPage",
  default: 0
})

export default function useCards({ content }) {
  const [loadginNextPage, setLoadingNextPage] = useState(false);
  const [cards, setCards] = useState([]);
  const [cat, setCat] = useRecoilState(defaultCat)
  const [page, setPage] = useRecoilState(defaultPage);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoadingNextPage(true)
    getCards({ content, page, cat }).then(({ cards, totalPages }) => {
      setCards(cards);
      setTotalPages(totalPages)
      setLoadingNextPage(false);
    });
  }, [content, page, cat])

  return { loadginNextPage, cards, totalPages, page, setPage, setCat };
}
