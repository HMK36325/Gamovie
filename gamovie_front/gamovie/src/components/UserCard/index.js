import React from "react";
import { Link } from "wouter";
import './userCard.css';

export default function UserCard({ url, title, id, year, director, contentType, userNote, votedAt }) {
    const src = url.startsWith('http') ? url : '../images/' + url;
    return (
        <div className="user-card">
            <Link to={`${contentType}/${id}`} className="card-body">
                <div>
                    <img alt={title} src={src} />
                </div>
                <div className="user-card-info">
                    <div className="info-head">
                        <p className="title-card">{title}</p>
                        <p className="year">{year}</p>
                    </div>
                    <p className="director">{director}</p>
                    <div className="info-bot">
                        <p className="note-info">Tu nota:</p>
                        <p className="user-note">{userNote}</p>
                    </div>
                    <p className="voted-at">Votada: {votedAt}</p>
                </div>
            </Link >
        </div>
    );
}