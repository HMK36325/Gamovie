import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "components/Card";

export default function ListOfSearch({ cards }) {
    return (
        <Container className="d-flex flex-column mt-4">
            <Row>
                {cards.map(function (card) {
                    return (
                        <Col
                            key={`${card.id}/${card.image}`}
                            xs="6"
                            sm="6"
                            md="4"
                            lg="3"
                            className="d-flex justify-content-center mt-3"
                        >
                            <Card
                                key={`${card.id}/${card.image}`}
                                url={card.image}
                                year={card.year}
                                title={card.name}
                                id={card.id}
                                contentType={card.content}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}