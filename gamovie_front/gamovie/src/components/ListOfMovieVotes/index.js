import UserCard from "components/UserCard";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ListOfMovieVotes({ movieVotes }) {
    return (
        <Container className="d-flex flex-column mt-4">
            {movieVotes && <>
                <h2 className="text-center m-3">Votos a Películas</h2>
                <Row>
                    {movieVotes.map(function (vote) {
                        return (
                            <Col
                                key={vote.id}
                                xs="12"
                                sm="12"
                                md="12"
                                lg="6"
                                xl="6"
                                xxl="4"
                                className="d-flex justify-content-center mt-3"
                            >
                                <UserCard
                                    id={vote.movie.id}
                                    title={vote.movie.name}
                                    url={vote.movie.image}
                                    year={vote.movie.year}
                                    director={vote.movie.director}
                                    contentType={vote.movie.content}
                                    userNote={vote.vote}
                                    votedAt={vote.voted_at}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </>}
        </Container>
    );
}