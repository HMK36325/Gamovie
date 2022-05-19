import React from "react";
import 'components/MovieDetails/movieDetails.css';

export default function GameDetails({ name, category, year, distributor, synopsis }) {
    return (
        <>
            <div className="content first">
                <p className="description-item name">Nombre:</p>
                <p className="info-item name">{name}</p>
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
                <p className="description-item">Descripción:</p>
                <p className="info-item sinopsis">{synopsis}</p>
            </div>
        </>
    );
};