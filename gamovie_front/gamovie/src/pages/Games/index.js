import React from "react";
import ListOfCards from "components/ListOfCards";
import useCards from "hooks/useCards";
import { Spinner} from "react-bootstrap";

export default function Games() {
  const { loading, loadginNextPage, cards, lastPage, page, setPage } = useCards({ content: "games" });


  return <>{loading || loadginNextPage
    ? <Spinner animation="border" className="loading" />
    : <ListOfCards cards={cards} contentType='games' setPage={setPage} lastPage={lastPage} page={page} />
  }
  </>;
}
