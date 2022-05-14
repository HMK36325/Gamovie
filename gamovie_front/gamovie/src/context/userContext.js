import React, { useEffect, useState } from "react";
import getGameVotes from "services/getGameVotes";
import getMovieVotes from "services/getMovieVotes";

const Context = React.createContext();

export function UserContextProvider({ children }) {
    const [movieVotes, setMovieVotes] = useState([]);
    const [gameVotes, setGameVotes] = useState([]);
    const [currentUser, setCurrentUser] = useState(
        () => JSON.parse(window.localStorage.getItem('currentUser')));

    useEffect(() => {
        if (!currentUser) { setGameVotes([]); setMovieVotes([]); return }
        getGameVotes({ currentUser }).then(setGameVotes);
        getMovieVotes({ currentUser }).then(setMovieVotes);

    }, [currentUser])

    return <Context.Provider value={{ currentUser, movieVotes, gameVotes, setMovieVotes, setGameVotes, setCurrentUser }}>
        {children}
    </Context.Provider>
}

export default Context;