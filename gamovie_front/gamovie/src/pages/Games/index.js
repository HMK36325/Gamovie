import React from "react";
import ListOfCards from "components/ListOfCards";
import useCards from "hooks/useCards";
import { Spinner } from "react-bootstrap";

export default function Games() {
  const { loading, loadginNextPage, cards, totalPages, page, setPage, setCat } = useCards({ content: "games" });

  return <>
    {loading
      ? < Spinner animation="border" className="loading" />

      : <ListOfCards cards={cards} contentType='games' setPage={setPage} page={page} setCat={setCat} totalPages={totalPages} loadingNextPage={loadginNextPage} />
    }

  </>;
}
