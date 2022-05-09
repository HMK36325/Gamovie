import React from "react";
import ListOfCards from "components/ListOfCards";
import useCards from "hooks/useCards";
import { Spinner } from "react-bootstrap";

export default function Games() {
  const { loading, cards } = useCards({ content: "games" });

  return <>{loading 
  ? <Spinner animation="border" className="loading"/> 
  : <ListOfCards cards={cards} contentType='games' />
  }
  </>;
}
