import React from "react";
import { Col } from "react-bootstrap";
import ReviewCard from "components/ReviewCard";

export default function Reviews({ reviews }) {
    return <div>
        {
            reviews.length > 0 && <>
                <Col xs="12">
                    <h2 className="content">Reviews</h2>
                </Col>
                {reviews.map((review) => {
                    return <Col>
                        <ReviewCard username={review.user.name} review={review.review} reviewedAt={review.reviewed_at} />
                    </Col>
                })}
            </>
        }
    </div>
}