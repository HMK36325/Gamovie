import React, { useState } from "react";
import VoteCard from "components/VoteCard";
import MovieDetails from "components/MovieDetails";
import { Container, Row, Col } from "react-bootstrap";
import GameDetails from "components/GameDetails";
import Reviews from "components/Reviews";

import './detailsPage.css'
import { Link } from "wouter";
import { useLocation } from "wouter";


export default function DetailsPage({ details, movieOrGame, cardsIds, reviews }) {

    const [nextConent, setNextContent] = useState(cardsIds.indexOf(details.id) + 1)
    const [prevContent, setPrevContent] = useState(cardsIds.indexOf(details.id) - 1)
    const [, navigate] = useLocation();
    const handleNextContent = () => {
        if (nextConent <= cardsIds.length) setNextContent(prev => prev + 1)
    }
    const handlePrevContent = () => {
        if (prevContent > 1) setPrevContent(prev => prev - 1)
    }

    if (details.error) navigate('/404');

    return (

        <Container className="mt-2">
            <Row>
                <Col lg={{ span: 9, offset: 3 }} md="12" className="d-flex justify-content-center">
                    <div className="change-details-container">
                        <div className="change-details">
                            {prevContent >= 0 &&
                                <Link to={`/${details.content}/${cardsIds[prevContent]}`}>
                                    <button className="btn-change-page" onClick={handlePrevContent}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                                            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                                        </svg>
                                    </button>
                                </Link>
                            }
                            <h2 className="content-name">{details.name}</h2>
                            {nextConent <= cardsIds.length - 1 &&
                                <Link to={`/${details.content}/${cardsIds[nextConent]}`}>
                                    <button className="btn-change-page" onClick={handleNextContent}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                                            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                                        </svg>
                                    </button>
                                </Link>}
                        </div>
                    </div>
                </Col>
                <Col xs="12" md="4" lg="3" className="d-flex justify-content-center">
                    <VoteCard
                        url={details.image}
                        nVotes={details.n_votes}
                        note={details.note}
                        content={details.content}
                        id={details.id} />
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
                        : <GameDetails
                            name={details.name}
                            category={details.category}
                            year={details.year}
                            distributor={details.distributor}
                            synopsis={details.synopsis} />
                    }
                </Col>
                <Reviews reviews={reviews} />
            </Row>
        </Container>
    );
}