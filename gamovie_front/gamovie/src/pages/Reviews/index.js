import React, { useState } from "react";
import { Button } from "react-bootstrap";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import ListOfReviews from "components/ListOfReviews";

export default function Reviews() {
    const { movieReviews, gameReviews, isPremium } = useUser()
    const [, navigate] = useLocation();
    const [showContent, setShowContent] = useState(false);

    if (!isPremium) return navigate('/')

    const handleClick = () => {
        showContent ? setShowContent(false) : setShowContent(true);
    }
    return <>
        <div className="change-list-button">
            <Button variant="secondary" className="bg-btn" onClick={handleClick}>{
                showContent ? <>Películas</> : <>Juegos</>
            }</Button>
        </div>
        {showContent ? <ListOfReviews reviews={[...gameReviews].reverse()} contentType='games' /> : <ListOfReviews reviews={[...movieReviews].reverse()} contentType='movies' />}
    </>
}