import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "wouter";
import './userReview.css'

export default function UserReview({ reviewedAt, url, name, review, id, contentType }) {
    const src = url.startsWith('http') ? url : '../images/' + url;
    return <Card className="review mb-3">
        <Link to={`/${contentType}/${id}`} className="review-link">
            <Card.Header className="review-header">{name}</Card.Header>
            <Card.Body className="review-body w-100">
                <img alt={name} src={src} className="user-review-img" />
                <blockquote className="blockquote mb-0">
                    <p className="review-text">{review}</p>
                    <footer className="blockquote-footer">{reviewedAt}</footer>
                </blockquote>
            </Card.Body>
        </Link>
    </Card >
}