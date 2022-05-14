import Context from "context/userContext"
import { useCallback, useContext, useState } from "react";
import loginService from "services/login"
import addVoteService from "services/addVote";
import updateVoteService from "services/updateVote";
import removeVoteService from "services/removeVote";

export default function useUser() {
    const { movieVotes, gameVotes, currentUser, setMovieVotes, setGameVotes, setCurrentUser } = useContext(Context);
    const [state, setState] = useState({ loading: false, error: false });

    const login = useCallback(({ username, password }) => {
        setState({ loading: true, error: false })
        loginService({ username, password })
            .then(currentUser => {
                window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
                setState({ loading: false, error: false })
                setCurrentUser(currentUser);
            })
            .catch(err => {
                window.localStorage.removeItem('currentUser');
                setState({ loading: false, error: true })
                console.error(err);
            })
    }, [setCurrentUser]);

    //-----------------VOTES FUNCTIONS----------------//

    const addVote = useCallback(({ content_id, contentType, note }) => {
        addVoteService({ content_id, currentUser, contentType, note })
            .then(vote => {
                contentType === 'movies' ? setMovieVotes(prevVotes => prevVotes.concat(vote))
                    : setGameVotes(prevVotes => prevVotes.concat(vote))
            })
            .catch(err => {
                console.error(err);
            })
    }, [currentUser, setMovieVotes, setGameVotes])

    const updateVote = useCallback(({ vote_id, contentType, note }) => {
        updateVoteService({ vote_id, currentUser, contentType, note })
            .then(vote => {
                contentType === 'movies' ?
                    setMovieVotes((prevVotes) => {
                        prevVotes = prevVotes.filter(prevVote => prevVote.id !== vote.id);
                        return prevVotes.concat(vote);
                    })
                    : setGameVotes((prevVotes) => {
                        prevVotes = prevVotes.filter(prevVote => prevVote.id !== vote.id);
                        return prevVotes.concat(vote);
                    })
            })
    }, [currentUser, setGameVotes, setMovieVotes])

    const removeVote = useCallback(({ vote_id, contentType }) => {
        removeVoteService({ vote_id, contentType, currentUser })
            .then(res => {
                contentType === 'movies' ?
                    setMovieVotes((prevVotes) => {
                        return prevVotes = prevVotes.filter(prevVote => prevVote.id !== vote_id);
                    })
                    : setGameVotes((prevVotes) => {
                        return prevVotes = prevVotes.filter(prevVote => prevVote.id !== vote_id);
                    })
            });
    }, [currentUser])



    //-----------------REVIEWS FUNCTIONS--------------//

    const logout = useCallback(() => {
        window.localStorage.removeItem('currentUser');
        setCurrentUser(null);
    }, [setCurrentUser]);


    return {
        addVote,
        updateVote,
        removeVote,
        movieVotes,
        gameVotes,
        isLogged: Boolean(currentUser),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout
    };
}