import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import ReviewCard from "components/ReviewCard";
import ReviewAddingCard from "components/ReviewAddingCard";
import Context from "context/userContext";

export default function Reviews({ reviews, movieOrGame, contentId }) {
    const { movieReviews, gameReviews, isPremium } = useContext(Context)
    const [theUserReview, setTheUserReview] = useState({})

    useEffect(() => {
        if (isPremium) {
            if (movieOrGame && movieReviews.length > 0) {
                movieReviews.forEach(review => {
                    if (review.movie.id === contentId) setTheUserReview(review)
                });
            } else if (gameReviews.length > 0) {
                gameReviews.forEach(review => {
                    if (review.game.id === contentId) setTheUserReview(review)
                });
            }
        }
    }, [movieReviews, gameReviews, movieOrGame, contentId, isPremium])

    return <div>
        {
            (isPremium || reviews.length > 0) && <>
                <Col xs="12">
                    <h3 className="content">Reviews</h3>
                </Col>
                {isPremium &&
                    <Col>
                        <ReviewAddingCard theUserReview={theUserReview} movieOrGame={movieOrGame} contentId={contentId} />
                    </Col>}
                {reviews.length > 0 && reviews.map((review) => {
                    if (review.id !== theUserReview.id) {
                        return <Col key={review.id}>
                            <ReviewCard key={review.id} username={review.user.name} review={review.review} reviewedAt={review.reviewed_at} />
                        </Col>
                    }
                    return null;
                })}
            </>
        }
    </div>
}