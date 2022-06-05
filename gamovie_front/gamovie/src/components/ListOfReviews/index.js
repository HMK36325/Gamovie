import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserReview from "components/UserReview";

export default function ListOfReviews({ contentType, reviews }) {

    return <Container>
        <Row>
            <h2 className="text-center m-3">Reviews a {contentType === 'movies' ? 'películas' : 'juegos'}</h2>
            {reviews && reviews.map((review) => {
                return <Col key={review.id} xs="12">
                    <UserReview
                        key={review.id}
                        reviewedAt={review.reviewed_at}
                        name={contentType === 'movies' ? review.movie.name : review.game.name}
                        url={contentType === 'movies' ? review.movie.image : review.game.image}
                        id={contentType === 'movies' ? review.movie.id : review.game.id}
                        contentType={contentType}
                        review={review.review}
                    />
                </Col>
            })}
        </Row>
    </Container>
}