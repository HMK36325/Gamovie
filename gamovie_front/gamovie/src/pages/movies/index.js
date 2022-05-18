import React from "react";
import ListOfCards from "components/ListOfCards";
import useCards from "hooks/useCards";

export default function Movies() {
  const { loadginNextPage, cards, totalPages, page, setPage, setCat } = useCards({ content: "movies" });

  return <ListOfCards cards={cards} contentType='movies' setPage={setPage} page={page} setCat={setCat} totalPages={totalPages} loadingNextPage={loadginNextPage} />

}
