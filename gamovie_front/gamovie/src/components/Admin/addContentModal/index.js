import React from "react";
import ReactDOM from "react-dom";
import './AddContentModal.css'

function AddContentModal({ children, onClose }) {
    return <div className='content-modal'>
        <div className='add-modal-content'>
            <button className="btn close-modal" onClick={onClose}>❌</button>
            {children}
        </div>
    </div>
}

export default function ModalPortal({ children, onClose }) {
    return ReactDOM.createPortal(<AddContentModal onClose={onClose}>
        {children}
    </AddContentModal>,
        document.getElementById('modal-root')
    )
}