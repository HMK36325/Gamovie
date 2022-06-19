import UserCard from "components/UserCard";
import React from "react";
import { Container, Row, Col} from "react-bootstrap";

export default function ListOfGameVotes({gameVotes }) {
    return (
        <Container className="d-flex flex-column mt-4">
            <h2 className="text-center m-3">Votos a Videojuegos</h2>
            <Row>
                {gameVotes.length > 0 ? gameVotes.map(function (vote) {
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
                }) : <h3 className="text-center mt-5">Aún no has votado ningún juego.</h3>}
            </Row>
        </Container>
    );
}