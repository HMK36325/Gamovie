import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddContentModal from 'components/Admin/addContentModal';
import AddContentForm from "../addContentForm";
import './addMovieCard.css'

export default function AddMovieCard({ img, name, year, synopsis, setShowNoti }) {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => {
        setShowModal(false)
    }

    const handleClick = () => {
        setShowModal(true)
    }
    return (
        <div className='d-flex flex-column'>
            <div className='movie-card mb-3'>
                <div className="img-container"><img className='card-img' alt={name} src={img} /></div>
                <div className="card-info-movie">
                    <p className='movie-card-name'>{name}</p>
                    <span className='movie-card-year justify-self-end'>{year}</span>
                </div>
            </div>
            <Button variant="success" className="card-btn mb-3" onClick={handleClick}>Añadir</Button>
            {showModal && <AddContentModal onClose={handleClose}><AddContentForm contentType="movies" name={name} year={year} synopsis={synopsis} setShowModal={setShowModal} setShowNoti={setShowNoti} /></AddContentModal>}
        </div>
    );
}