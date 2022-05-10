import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import Card from "components/Card";

export default function ListOfCards({ cards, contentType, setPage, lastPage }) {

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <Container className="d-flex flex-column mt-4">
      <Row>
        {cards.map(function (card) {
          return (
            <Col
              key={card.id}
              xs="6"
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
                id={card.id}
                contentType={contentType}
              />
            </Col>
          );
        })}
      </Row>
      <div className="show-more">
        {
          lastPage
            ? <p>No hay más contenido...</p>
            : <Button onClick={handleNextPage} variant="secondary">Ver más...</Button>
        }
      </div>
    </Container>
  );
}
