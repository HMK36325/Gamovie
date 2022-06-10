import Context from "context/userContext"
import { useCallback, useContext, useState } from "react";
import { useLocation } from "wouter";
import loginService from "services/login"
import addVoteService from "services/addVote";
import updateVoteService from "services/updateVote";
import removeVoteService from "services/removeVote";
import addReviewService from "services/addReview";
import updateReviewService from "services/updateReview";
import deleteReviewService from "services/deleteReview";
import addPremiumService from "services/addPremium"
import { cloneDeep } from "lodash";

export default function useUser() {
    const { movieVotes, gameVotes, movieReviews, gameReviews, currentUser, isPremium, setMovieVotes, setGameVotes, setMovieReviews, setGameReviews, setCurrentUser, setIsAdmin, setIsPremium } = useContext(Context);
    const [, navigate] = useLocation();
    const [state, setState] = useState({ loading: false, credentiaslError: false, bannedError: false });

    const login = useCallback(({ username, password }) => {
        setState({ loading: true, error: false })
        loginService({ username, password })
            .then(currentUser => {
                setCurrentUser(currentUser);
                const theUser = cloneDeep(currentUser)
                theUser.accessToken = window.btoa(theUser.accessToken)
                window.localStorage.setItem('currentUser', JSON.stringify(theUser));
                setState({ loading: false, error: false })
            })
            .catch(err => {
                window.localStorage.removeItem('currentUser');
                if (err.status === 401) setState({ loading: false, credentiaslError: true })
                if (err.status === 403) setState({ loading: false, bannedError: true })
            })
    }, [setCurrentUser]);

    const addPremium = useCallback(() => {
        addPremiumService({ currentUser }).then(() => {
            setIsPremium(true)
            const auxUser = currentUser;
            auxUser.roles.push('ROLE_PREMIUM')
            setCurrentUser(auxUser)
            auxUser.accessToken = window.btoa(auxUser.accessToken)
            window.localStorage.setItem('currentUser', JSON.stringify(auxUser));
        })
    }, [currentUser, setIsPremium, setCurrentUser])

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

    const addReview = useCallback(({ contentId, movieOrGame, review }) => {
        addReviewService({ contentId, currentUser, movieOrGame, review })
            .then((review) => {
                movieOrGame ?
                    setMovieReviews(prevReviews => prevReviews.concat(review))
                    : setGameReviews(prevReviews => prevReviews.concat(review))
            })
    }, [currentUser, setMovieReviews, setGameReviews])

    const updateReview = useCallback(({ contentId, movieOrGame, review }) => {
        updateReviewService({ contentId, currentUser, movieOrGame, review })
            .then((review) => {
                movieOrGame ?
                    setMovieReviews(prevReviews => {
                        prevReviews = prevReviews.filter(prevReview => prevReview.id !== review.id)
                        return prevReviews.concat(review)
                    })
                    : setGameReviews(prevReviews => {
                        prevReviews = prevReviews.filter(prevReview => prevReview.id !== review.id)
                        return prevReviews.concat(review)
                    })
            })
    }, [currentUser, setMovieReviews, setGameReviews])

    const deleteReview = useCallback(({ contentId, movieOrGame }) => {
        deleteReviewService({ currentUser, contentId, movieOrGame })
            .then(() => {
                movieOrGame ?
                    setMovieReviews(prevReviews => prevReviews.filter(prevReview => prevReview.id !== contentId))
                    : setGameReviews(prevReviews => prevReviews.filter(prevReview => prevReview.id !== contentId))
            })
    }, [currentUser, setMovieReviews, setGameReviews])

    const logout = useCallback(() => {
        window.localStorage.removeItem('currentUser');
        setCurrentUser(null);
        setIsAdmin(false);
        setMovieReviews([]);
        setGameReviews([]);
        setIsPremium(false)
        navigate('/');

    }, [setCurrentUser, setIsAdmin, navigate, setGameReviews, setMovieReviews, setIsPremium]);


    return {
        addVote,
        updateVote,
        removeVote,
        addReview,
        updateReview,
        deleteReview,
        addPremium,
        currentUser,
        movieReviews,
        gameReviews,
        movieVotes,
        gameVotes,
        isPremium,
        isLogged: Boolean(currentUser),
        isLoginLoading: state.loading,
        hasLoginError: state.credentiaslError,
        isBanned: state.bannedError,
        login,
        logout
    };
}