import ListOfCards from "components/ListOfCards";
import useCards from "hooks/useCards";
import { Spinner } from "react-bootstrap";
import React from "react";

export default function Movies() {
  const { loading, cards } = useCards({ content: "movies" });
  
  return <>{loading 
    ? <Spinner className="loading"/> 
    : <ListOfCards cards={cards} contentType='movies'/>
    }
    </>;
}
