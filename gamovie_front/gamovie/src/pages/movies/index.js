import ListOfCards from "components/ListOfCards";
import useCards from "hooks/useCards";
import { Spinner, Button } from "react-bootstrap";
import React from "react";

export default function Movies() {
  const { loading, loadginNextPage, cards, setPage, lastPage } = useCards({ content: "movies" });

  return <>{loading
    ? <Spinner animation="border" className="loading" />
    : <>
      <ListOfCards cards={cards} contentType='movies' setPage={setPage} lastPage={lastPage}/>


    </>
  }
  </>;
}
