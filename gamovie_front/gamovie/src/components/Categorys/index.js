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
            <div onChange={handleCat} className="cat-group">
                <input type="radio" id="todos" value="not" name="cat" className="form-check-input" />
                <label className="form-check-label" htmlFor="todos">Todos</label>

                {contentType === 'movies' ? <>
                    <input type="radio" id="belica" value="belica" name="cat" className="form-check-input" />
                    <label className="form-check-label" htmlFor="belica">Bélica</label>
                    <input type="radio" id="ciencia" value="ciencia ficcion" name="cat" className="form-check-input" />
                    <label className="form-check-label" htmlFor="ciencia">Ciencia Ficción</label>
                    <input type="radio" id="accion" value="accion" name="cat" className="form-check-input" />
                    <label className="form-check-label" htmlFor="accion">Acción</label>
                    <input type="radio" id="superheroes" value="superheroes" name="cat" className="form-check-input" />
                    <label className="form-check-label" htmlFor="superheroes">Superhéroes</label>
                    <input type="radio" id="comedia" value="comedia" name="cat" className="form-check-input" />
                    <label className="form-check-label" htmlFor="comedia">Comedia</label>
                    <input type="radio" id="thriller" value="thriller" name="cat" className="form-check-input" />
                    <label className="form-check-label" htmlFor="thriller">Thriller</label>
                    <input type="radio" id="fantasia" value="fantasia" name="cat" className="form-check-input" />
                    <label className="form-check-label" htmlFor="fantasia">Fantasía</label>
                    <input type="radio" id="drama" value="drama" name="cat" className="form-check-input" />
                    <label className="form-check-label" htmlFor="drama">Drama</label>
                    <input type="radio" id="western" value="western" name="cat" className="form-check-input" />
                    <label className="form-check-label" htmlFor="western">Western</label></>

                    : <>
                        <input type="radio" id="rpg" value="rpg" name="cat" className="form-check-input" />
                        <label className="form-check-label" htmlFor="rpg">RPG</label>
                        <input type="radio" id="abierto" value="mundo abierto" name="cat" className="form-check-input" />
                        <label className="form-check-label" htmlFor="abierto">Mundo Abierto</label>
                        <input type="radio" id="hack" value="hack and slash" name="cat" className="form-check-input" />
                        <label className="form-check-label" htmlFor="hack">Hack and Slash</label>
                        <input type="radio" id="aventura" value="aventura" name="cat" className="form-check-input" />
                        <label className="form-check-label" htmlFor="aventura">Aventura</label>
                        <input type="radio" id="zombies" value="zombis" name="cat" className="form-check-input" />
                        <label className="form-check-label" htmlFor="zombies">Zombies</label>
                        <input type="radio" id="shooter" value="shooter" name="cat" className="form-check-input" />
                        <label className="form-check-label" htmlFor="shooter">Shooter</label>
                        <input type="radio" id="soulslike" value="soulslike" name="cat" className="form-check-input" />
                        <label className="form-check-label" htmlFor="soulslike">SoulsLike</label>
                        <input type="radio" id="indie" value="indie" name="cat" className="form-check-input" />
                        <label className="form-check-label" htmlFor="indie">Indie</label>
                    </>
                }
            </div>
        </>
    )
}