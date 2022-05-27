import React from "react";
import { useLocation } from "wouter";
import useSearch from "hooks/useSearch";
import ListOfSearch from "components/ListOfSearch";
import { Spinner } from "react-bootstrap";

export default function Search() {
    const [path,] = useLocation();
    const keyword = path.split('/').pop()
    const { cards, loading, notFound } = useSearch({ keyword, size: 8 });


    return <>
        {loading
            ? <Spinner animation="border" className="loading" />
            : <>
                {
                    notFound
                        ?
                        <div className="notFound">
                            <h2>No se econtraron resultados...</h2>
                            <iframe title="iframe" src="https://giphy.com/embed/Z9hZLKflOlXjo349De" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                        </div>

                        : <ListOfSearch cards={cards} />
                }
            </>
        }

    </>
}