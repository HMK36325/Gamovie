import React from "react";
import useDetails from "hooks/useDetails";
import DetailsPage from "components/DetailsPage";
import { Spinner } from "react-bootstrap";
import { useLocation } from "wouter";

export default function Details() {
    const [path,] = useLocation();
    const movieOrGame = path.includes('movies')
    const apiRoute = path.split('/').slice(-2);
    const auxPath = `${apiRoute[0]}/${apiRoute[1]}`;
    const { loading, details, totalElements, cardsIds, reviews } = useDetails({ path: auxPath })

    return (
        <>
            {loading
                ? <Spinner animation="border" className="loading" />
                : <DetailsPage key={Math.random()} details={details} movieOrGame={movieOrGame} totalElements={totalElements} cardsIds={cardsIds} reviews={reviews} path={auxPath} />
            }
        </>
    );
}