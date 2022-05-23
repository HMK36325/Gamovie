import UserCard from "components/UserCard";
import React from "react";
import { Container, Row, Col} from "react-bootstrap";

export default function ListOfGameVotes({gameVotes }) {
    return (
        <Container className="d-flex flex-column mt-4">
            <h2 className="text-center m-3">Votos a Videojuegos</h2>
            <Row>
                {gameVotes.map(function (vote) {
                    return (
                        <Col
                            key={vote.id}
                            xs="6"
                            sm="6"
                            md="6"
                            lg="4"
                            className="d-flex justify-content-center mt-3"
                        >
                            <UserCard
                                id={vote.game.id}
                                title={vote.game.name}
                                url={vote.game.image}
                                year={vote.game.year}
                                director={vote.game.distributor}
                                contentType={vote.game.content}
                                userNote={vote.vote}
                                votedAt={vote.voted_at}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}