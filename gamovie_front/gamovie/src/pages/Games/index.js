import React from "react";
import ListOfCards from "components/ListOfCards";
import useCards from "hooks/useCards";

export default function Games() {
  const { loadginNextPage, cards, totalPages, page, setPage, setCat } = useCards({ content: "games" });

  return <ListOfCards cards={cards} contentType='games' setPage={setPage} page={page} setCat={setCat} totalPages={totalPages} loadingNextPage={loadginNextPage} />

}
