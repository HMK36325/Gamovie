import { useState, useEffect } from "react";
import getSearchGames from "services/getSearchGames";
import getSearchMovies from "services/getSearchMovies";

export default function useSearch({ keyword }) {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    useEffect(function () {
        setLoading(true)
        getSearchGames({ keyword }).then((cards) => {
            getSearchMovies({ keyword }).then((cards2) => {
                if (cards.length === 0 && cards2.length === 0) setNotFound(true)
                setCards(cards.concat(cards2))
                setLoading(false);
            });
        });
    }, [keyword])

    return { cards, loading, notFound };
}