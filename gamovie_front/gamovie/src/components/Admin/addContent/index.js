import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ShowResults from "../showResults.js";

export default function AddContent({ contentType }) {
    const [keyword, setKeyword] = useState('')
    const [search, setSearch] = useState(false)

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(true)
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" className="form-control" placeholder={`Busca ${contentType === 'movies' ? 'una pelicula' : 'un videojuego'}...`} onChange={handleChange} />
                <Button variant="success" type="submit">Buscar</Button>
            </div>
        </form >
        {search && <ShowResults keyword={keyword} contentType={contentType} />}
    </div>
}