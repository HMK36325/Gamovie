import React from "react";
import { useLocation } from "wouter";
import useSearch from "hooks/useSearch";
import ListOfSearch from "components/ListOfSearch";
import { Spinner } from "react-bootstrap";

export default function Search() {
    const [path,] = useLocation();
    const keyword = path.split('/').pop()
    const { cards, loading, notFound } = useSearch({ keyword });

    console.log(cards);
    console.log(notFound);

    return <>
        {loading
            ? <Spinner animation="border" className="loading" />
            : <ListOfSearch cards={cards} />
        }

    </>
}