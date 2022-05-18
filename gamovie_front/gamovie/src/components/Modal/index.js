import React from "react";
import ReactDOM from "react-dom";

import './modal.css'

function Modal({ children, onClose }) {
    return <div className='my-modal'>
        <div className='my-modal-content'>
            <button className="btn" onClick={onClose}>❌</button>
            {children}
            <h2 className="info-modal">Necesitas Iniciar Sesión para poder votar!</h2>
        </div>
    </div>
}

export default function ModalPortal({ children, onClose }) {
    return ReactDOM.createPortal(<Modal onClose={onClose}>
        {children}
    </Modal>,
        document.getElementById('modal-root')
    )
}