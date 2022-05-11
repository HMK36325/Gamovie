import React from "react";
import ListOfCards from "components/ListOfCards";
import useCards from "hooks/useCards";
import { Spinner} from "react-bootstrap";

export default function Movies() {
  const { loading, loadginNextPage, cards, lastPage, page, setPage } = useCards({ content: "movies" });

  return <>{loading || loadginNextPage
    ? <Spinner animation="border" className="loading" />
    : <ListOfCards cards={cards} contentType='movies' setPage={setPage} lastPage={lastPage} page={page} />
  }
  </>;
}
