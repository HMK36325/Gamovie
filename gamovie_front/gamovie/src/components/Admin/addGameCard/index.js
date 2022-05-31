import { Button } from "react-bootstrap";
import React, { useState } from "react";
import AddContentModal from "components/Admin/addContentModal"
import AddContentForm from "../addContentForm";
import './addGameCard.css'

export default function AddGameCard({ img, name, year }) {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => {
        setShowModal(false)
    }

    const handleClick = () => {
        setShowModal(true)
    }
    return <div className="card-game mb-3">
        <div className="img">
            <img src={img} className="img-fluid rounded-start" alt="card-img" />
        </div>

        <div className="add-card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{year}</p>
            <Button variant="success" className="card-btn" onClick={handleClick}>Añadir</Button>
        </div>
        {showModal && <AddContentModal onClose={handleClose}><AddContentForm contentType="games" name={name} year={year} /></AddContentModal>}
    </div>
}