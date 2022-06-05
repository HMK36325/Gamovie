import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import './addReview.css'

export default function ReviewAddingCard({ theUserReview, movieOrGame, contentId }) {
    const [review, setReview] = useState('')
    const [showDelete, setShowDelete] = useState(false)
    const [error, setError] = useState(null);
    const [showNoti, setShowNoti] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false)
    const { addReview, updateReview, deleteReview } = useUser();

    const handeleChange = (e) => {
        setReview(e.target.value)
        if (review.trim().length > 20) setError(null)
    }

    const handeleDelete = () => {
        setReview('');
        setShowDelete(false)
        setShowNoti(true)
        setIsDeleted(true)
        deleteReview({ contentId: theUserReview.id, movieOrGame })
    }

    const handleClick = () => {
        if (!theUserReview.review && review.trim().length > 20) {
            addReview({ contentId, movieOrGame, review })
            setShowNoti(true)
        } else if (theUserReview.review !== review && review.trim().length > 20) {
            updateReview({ contentId: theUserReview.id, movieOrGame, review })
            setShowNoti(true)
        } else setError('Al menos 20 caracteres ⚠️')
    }

    useEffect(() => {
        if (theUserReview.review) {
            setReview(theUserReview.review)
            setShowDelete(true)
        }
    }, [theUserReview])

    useEffect(() => {
        const notiTimeOut = setTimeout(() => {
            setShowNoti(false)
            setIsDeleted(false)
        }, 3000)

        return () => clearTimeout(notiTimeOut)

    }, [setShowNoti, review])

    return <div className="form-floating add-review">
        <textarea className="form-control" placeholder="Leave a review" id="floatingTextarea" value={review} onChange={handeleChange}></textarea>
        <label htmlFor="floatingTextarea">Tú review</label>
        <button className="btn btn-success" onClick={handleClick}>Añadir</button>
        {showNoti && <Alert variant={isDeleted ? 'danger' : 'success'} className="review-noti">{isDeleted ? 'Review eliminada!' : 'Review añadida!'}</Alert>}
        {showDelete && <button className="btn close-btn" onClick={handeleDelete}>❌</button>}
        {error && <span className="review-error form-error">{error}</span>}
    </div>
}