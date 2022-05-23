import Context from "context/userContext"
import { useCallback, useContext, useState } from "react";
import { useLocation } from "wouter";
import loginService from "services/login"
import addVoteService from "services/addVote";
import updateVoteService from "services/updateVote";
import removeVoteService from "services/removeVote";

export default function useUser() {
    const { movieVotes, gameVotes, currentUser, setMovieVotes, setGameVotes, setCurrentUser, setIsAdmin } = useContext(Context);
    const [, navigate] = useLocation();
    const [state, setState] = useState({ loading: false, credentiaslError: false, bannedError: false });

    const login = useCallback(({ username, password }) => {
        setState({ loading: true, error: false })
        loginService({ username, password })
            .then(currentUser => {
                currentUser.accessToken = window.btoa(currentUser.accessToken)
                window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
                setState({ loading: false, error: false })
                setCurrentUser(currentUser);
            })
            .catch(err => {
                window.localStorage.removeItem('currentUser');
                if (err.status === 401) setState({ loading: false, credentiaslError: true })
                if (err.status === 403) setState({ loading: false, bannedError: true })
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
    }, [currentUser, setMovieVotes, setGameVotes])



    //-----------------REVIEWS FUNCTIONS--------------//

    const logout = useCallback(() => {
        window.localStorage.removeItem('currentUser');
        setCurrentUser(null);
        setIsAdmin(false);
        navigate('/');
    }, [setCurrentUser, setIsAdmin, navigate]);


    return {
        addVote,
        updateVote,
        removeVote,
        movieVotes,
        gameVotes,
        isLogged: Boolean(currentUser),
        isLoginLoading: state.loading,
        hasLoginError: state.credentiaslError,
        isBanned: state.bannedError,
        login,
        logout
    };
}