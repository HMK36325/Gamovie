import ListOfMovieVotes from "components/ListOfMovieVotes";
import useUser from "hooks/useUser";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import ListOfGameVotes from "components/ListOfGameVotes";

export default function Votes() {
    const { movieVotes, gameVotes } = useUser()

    const [showContent, setShowContent] = useState(false);

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