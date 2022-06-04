import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import './addReview.css'

export default function ReviewAddingCard({ theUserReview, movieOrGame, contentId}) {
    const [review, setReview] = useState('')
    const [showDelete, setShowDelete] = useState(false)
    const [error, setError] = useState(null);
    const { addReview, updateReview, deleteReview } = useUser();

    const handeleChange = (e) => {
        setReview(e.target.value)
        if (review.trim().length > 20) setError(null)
    }

    const handeleDelete = () => {
        setReview('');
        setShowDelete(false)
        deleteReview({ contentId: theUserReview.id, movieOrGame })
    }

    const handleClick = () => {
        if (!theUserReview.review && review.trim().length > 20) {
            addReview({ contentId, movieOrGame, review })
        } else if (theUserReview.review !== review && review.trim().length > 20) {
            updateReview({ contentId: theUserReview.id, movieOrGame, review })
        } else setError('Al menos 20 caracteres ⚠️')
    }

    useEffect(() => {
        if (theUserReview.review) {
            setReview(theUserReview.review)
            setShowDelete(true)
        }
    }, [theUserReview])
    console.log(contentId)

    return <div className="form-floating add-review">
        <textarea className="form-control" placeholder="Leave a review" id="floatingTextarea" value={review} onChange={handeleChange}></textarea>
        <label htmlFor="floatingTextarea">Tú review</label>
        <button className="btn btn-success" onClick={handleClick}>Añadir</button>
        {showDelete && <button className="btn close-btn" onClick={handeleDelete}>❌</button>}
        {error && <span className="review-error form-error">{error}</span>}
    </div>
}