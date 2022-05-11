import React from "react";
import VoteCard from "components/VoteCard";
import MovieDetails from "components/MovieDetails";
import { Container, Row, Col } from "react-bootstrap";

export default function DetailsPage({ details, movieOrGame }) {

    console.log(movieOrGame)
    return (
        <Container className="mt-5">
            <Row>
                <Col xs="12" md="4" lg="3" className="d-flex justify-content-center">
                    <VoteCard url={details.image} nVotes={details.n_votes} note={details.note} />
                </Col>

                <Col xs="12" md="8" lg="9">
                    {movieOrGame
                        ? <MovieDetails
                            name={details.name}
                            director={details.director}
                            category={details.category}
                            year={details.year}
                            synopsis={details.synopsis}
                            distributor={details.distributor} />
                        : <p>Game expected..</p>
                    }
                </Col>
            </Row>
        </Container>
    );
}