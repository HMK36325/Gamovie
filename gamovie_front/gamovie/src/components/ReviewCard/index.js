import React from "react";
import { Card } from "react-bootstrap";
import './reviewCard.css'

export default function ReviewCard({ username, review, reviewedAt }) {
    return <Card className="review">
        <Card.Header>{username}</Card.Header>
        <Card.Body className="review-body">
            <blockquote className="blockquote mb-0 ms-3">
                <p>{review}</p>
                <footer className="blockquote-footer">{reviewedAt}</footer>
            </blockquote>
        </Card.Body>
    </Card>
}