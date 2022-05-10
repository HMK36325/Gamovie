import React from "react";
import ListOfCards from "components/ListOfCards";
import useCards from "hooks/useCards";
import { Spinner, Button } from "react-bootstrap";

export default function Games() {
  const { loading, loadginNextPage, cards, setPage, lastPage } = useCards({ content: "games" });


  return <>{loading
    ? <Spinner animation="border" className="loading" />
    : <ListOfCards cards={cards} contentType='games' setPage={setPage} lastPage={lastPage}/>
  }
  </>;
}
