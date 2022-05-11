import React from "react";
import useDetails from "hooks/useDetails";
import DetailsPage from "components/DetailsPage";
import { Spinner } from "react-bootstrap";
import { useLocation } from "wouter";

export default function Details() {
    const [path,] = useLocation();
    const movieOrGame = path.includes('movies')
    const { loading, details } = useDetails({ path: path.slice(1) })

    return (
        <>
            {loading
                ? <Spinner animation="border" className="loading" />
                : <DetailsPage details={details} movieOrGame={movieOrGame} />
            }
        </>
    );
}