import ListOfMovieVotes from "components/ListOfMovieVotes";
import useUser from "hooks/useUser";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import ListOfGameVotes from "components/ListOfGameVotes";
import { useLocation } from "wouter";

export default function Votes() {
    const { movieVotes, gameVotes, currentUser } = useUser()
    const [, navigate] = useLocation()
    const [showContent, setShowContent] = useState(false);

    if (!currentUser) return navigate('/')

    const handleClick = () => {
        showContent ? setShowContent(false) : setShowContent(true);
    }

    return <>
        <div className="change-list-button">
            <Button variant="secondary" className="bg-btn" onClick={handleClick}>{
                showContent ? <>Películas</> : <>Juegos</>
            }</Button>
        </div>
        {showContent ? <ListOfGameVotes gameVotes={[...gameVotes].reverse()} /> : <ListOfMovieVotes movieVotes={[...movieVotes].reverse()} />

        }
    </>
}