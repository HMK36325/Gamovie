import { useState, useEffect } from "react";
import getSearchGames from "services/getSearchGames";
import getSearchMovies from "services/getSearchMovies";

export default function useSearch({ keyword, size, contentType }) {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    useEffect(function () {
        setLoading(true)
        getSearchGames({ keyword, size }).then((cards) => {
            getSearchMovies({ keyword, size }).then((cards2) => {
                cards.length === 0 && cards2.length === 0 ? setNotFound(true) : setNotFound(false);
                setCards(cards.concat(cards2))
                setLoading(false);
            });
        });
    }, [keyword, size])

    return { cards, loading, notFound };
}