import React from "react";
import { Row, Container, Col, Spinner } from "react-bootstrap";
import Card from "components/Card";
import css from "styled-components";
import ReactPaginate from "react-paginate";
import Categorys from "components/Categorys";

import './listOfCards.css'

export const Overlay = css.div`
${({ loadingNextPage }) => loadingNextPage ? `
  opacity: 0.6;
  transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  pointer-events: none;
` : ''}
`

export default function ListOfCards({ cards, contentType, setPage, totalPages, page, setCat, loadingNextPage }) {

  const handlePageClick = (data) => {
    setPage(data.nextSelectedPage);
    window.scrollTo(0, 0);
  }

  return (
    <Container className="d-flex flex-column mt-4">
      <Categorys setCat={setCat} setPage={setPage} contentType={contentType} className="categorys" />
      <Overlay>
        {loadingNextPage ?
          <Spinner animation="border" className="loading" />
          : <Row>
            {loadingNextPage ? < Spinner animation="border" className="loading" />
              : cards.map(function (card) {
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
          </Row>}
      </Overlay>
      <div className="show-more">
        <ReactPaginate
          previousLabel={'Anterior'}
          nextLabel={'Siguiente'}
          breakLabel={'...'}
          pageRangeDisplayed={5}
          marginPagesDisplayed={3}
          pageCount={totalPages}
          forcePage={page}
          onClick={handlePageClick}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          activeClassName={'active'}
          renderOnZeroPageCount={null}
          eventListener={'onClick'}
        />
      </div>
    </Container>
  );
}
