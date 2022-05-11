import React from "react";
import { Row, Container, Col, Button, ButtonGroup } from "react-bootstrap";
import Card from "components/Card";
import css from "styled-components";

export const Overlay = css.div`
${({ lastPage }) => lastPage ? `
  opacity: 0.6;
  transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  pointer-events: none;
` : ''}
`

export default function ListOfCards({ cards, contentType, page, setPage, lastPage }) {

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  }
  const handlePrevPage = () => {
    setPage(prevPage => prevPage - 1)
  }

  return (
    <Container className="d-flex flex-column mt-4">
      <Overlay>
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
          {page > 0 && !lastPage
            ? <>
              <ButtonGroup aria-label="Next and Prev buttons">
                <Button onClick={handlePrevPage} variant="secondary">Prev</Button>
                <Button onClick={handleNextPage} variant="secondary">Next</Button>
              </ButtonGroup>
            </>
            : page === 0 && !lastPage ? <Button onClick={handleNextPage} variant="secondary">Next Page...</Button>
              : <Button onClick={handlePrevPage} variant="secondary">Prev Page...</Button>
          }
        </div>
      </Overlay>
    </Container>
  );
}
