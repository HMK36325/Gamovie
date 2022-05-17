import React from "react";
import './categorys.css'

export default function Categorys({ contentType, setCat, setPage }) {
    const handleCat = (e) => {
        setCat(e.target.value)
        setPage(0);
    }
    return (
        <>
            <h2 className="head-title">Categorías</h2>
            <div className="cat-group">
                <div onChange={handleCat} className="btn-group individual" role="group">
                    <input type="radio" id="todos" value="not" name="cat" className="form-check-input btn-check" defaultChecked />
                    <label className="form-check-label btn btn-outline-primary" htmlFor="todos">Todos</label>

                    {contentType === 'movies' ? <>
                        <input type="radio" id="belica" value="belica" name="cat" className="form-check-input btn-check" />
                        <label className="form-check-label btn btn-outline-primary" htmlFor="belica">Bélica</label>
                        <input type="radio" id="ciencia" value="ciencia ficcion" name="cat" className="form-check-input btn-check" />
                        <label className="form-check-label btn btn-outline-primary" htmlFor="ciencia">Ciencia Ficción</label>
                        <input type="radio" id="accion" value="accion" name="cat" className="form-check-input btn-check" />
                        <label className="form-check-label btn btn-outline-primary" htmlFor="accion">Acción</label>
                        <input type="radio" id="superheroes" value="superheroes" name="cat" className="form-check-input btn-check" />
                        <label className="form-check-label btn btn-outline-primary" htmlFor="superheroes">Superhéroes</label>
                        <input type="radio" id="comedia" value="comedia" name="cat" className="form-check-input btn-check" />
                        <label className="form-check-label btn btn-outline-primary" htmlFor="comedia">Comedia</label>
                        <input type="radio" id="thriller" value="thriller" name="cat" className="form-check-input btn-check" />
                        <label className="form-check-label btn btn-outline-primary" htmlFor="thriller">Thriller</label>
                        <input type="radio" id="fantasia" value="fantasia" name="cat" className="form-check-input btn-check" />
                        <label className="form-check-label btn btn-outline-primary" htmlFor="fantasia">Fantasía</label>
                        <input type="radio" id="drama" value="drama" name="cat" className="form-check-input btn-check" />
                        <label className="form-check-label btn btn-outline-primary" htmlFor="drama">Drama</label>
                        <input type="radio" id="western" value="western" name="cat" className="form-check-input btn-check" />
                        <label className="form-check-label btn btn-outline-primary" htmlFor="western">Western</label></>

                        : <>
                            <input type="radio" id="rpg" value="rpg" name="cat" className="form-check-input btn-check" />
                            <label className="form-check-label btn btn-outline-primary" htmlFor="rpg">RPG</label>
                            <input type="radio" id="abierto" value="mundo abierto" name="cat" className="form-check-input btn-check" />
                            <label className="form-check-label btn btn-outline-primary" htmlFor="abierto">Mundo Abierto</label>
                            <input type="radio" id="hack" value="hack and slash" name="cat" className="form-check-input btn-check" />
                            <label className="form-check-label btn btn-outline-primary" htmlFor="hack">Hack and Slash</label>
                            <input type="radio" id="aventura" value="aventura" name="cat" className="form-check-input btn-check" />
                            <label className="form-check-label btn btn-outline-primary" htmlFor="aventura">Aventura</label>
                            <input type="radio" id="zombies" value="zombis" name="cat" className="form-check-input btn-check" />
                            <label className="form-check-label btn btn-outline-primary" htmlFor="zombies">Zombies</label>
                            <input type="radio" id="shooter" value="shooter" name="cat" className="form-check-input btn-check" />
                            <label className="form-check-label btn btn-outline-primary" htmlFor="shooter">Shooter</label>
                            <input type="radio" id="soulslike" value="soulslike" name="cat" className="form-check-input btn-check" />
                            <label className="form-check-label btn btn-outline-primary" htmlFor="soulslike">SoulsLike</label>
                            <input type="radio" id="indie" value="indie" name="cat" className="form-check-input btn-check" />
                            <label className="form-check-label btn btn-outline-primary" htmlFor="indie">Indie</label>
                        </>
                    }
                </div>
            </div>
        </>
    )
}