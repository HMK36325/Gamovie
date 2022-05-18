import React from "react";
import './movieDetails.css';

export default function MovieDetails({ name, director, category, distributor, year, synopsis }) {
    return (
        <>
            <div className="content first">
                <p className="description-item name">Nombre:</p>
                <p className="info-item name">{name}</p>
            </div>
            <div className="content">
                <p className="description-item">Director:</p>
                <p className="info-item">{director}</p>
            </div>
            <div className="content">
                <p className="description-item">Género:</p>
                <p className="info-item">{category}</p>
            </div>
            <div className="content">
                <p className="description-item">Año:</p>
                <p className="info-item">{year}</p>
            </div>
            <div className="content">
                <p className="description-item">Distribuidora:</p>
                <p className="info-item">{distributor}</p>
            </div>
            <div className="content">
                <p className="description-item">Synopsis:</p>
                <p className="info-item">{synopsis}</p>
            </div>

        </>
    );
}