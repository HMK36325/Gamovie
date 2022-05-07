import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Card from "components/Card";

export default function ListOfCards({ cards }) {
  return (
    <Container className="d-flex flex-column">
      <Row>
        {cards.map(function (card) {
          return (
            <Col
              sm="6"
              md="4"
              lg="3"
              className="d-flex justify-content-center mt-3"
            >
              <Card
                key={card.id}
                url={card.image}
                year={card.year}
                title={card.name}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
