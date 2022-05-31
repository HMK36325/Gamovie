import { useState, useEffect } from "react";
import searchMovies from "services/Admin/searchMovies";
import searchGames from "services/Admin/searchGames";

export default function useAddContent({ keyword, contentType }) {
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [searchedContent, setSearchedContent] = useState([])

    useEffect(() => {
        setLoading(true)
        contentType === 'movies' ?
            searchMovies({ keyword }).then((cards) => {
                cards.length === 0 ? setNotFound(true) : setNotFound(false)
                setSearchedContent(cards)
                setLoading(false)
            })
            : searchGames({ keyword }).then((cards) => {
                cards.length === 0 ? setNotFound(true) : setNotFound(false)
                setSearchedContent(cards)
                setLoading(false)
            })
    }, [contentType, keyword])

    return { loading, searchedContent, notFound };
}