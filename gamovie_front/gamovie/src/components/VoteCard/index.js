import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styledComponents from "styled-components";

import './voteCard.css';

const Box = styledComponents.div`
border: 5px solid #121416;
background-color: #212529;
justify-self: center;
align-self: start !important;
border-radius: 5px;
color: #fff;
max-width:214px;

    select{
        cursor: pointer;
        padding: 0.5em;
    }

@media (max-width: 768px) {
    max-width:70%;
    margin-bottom:3em !important;
}

`;

export default function VoteCard({ url, nVotes, note }) {
    const src = url && url.startsWith('http') ? url : '../../images/' + url;
    const [userNote, setUserNote] = useState(0);

    const handleChange = (e) => {
        setUserNote(e.target.value);
    }

    return (
        <Box>
            <img alt={url} src={src} className="img-fluid" />
            <div className="info">
                <div className="note">{note}</div>
                <div className="votes">
                    <p>Votos</p>
                    {nVotes}
                </div>
            </div>
            <Form.Select className="bg-secondary" onChange={handleChange} value={userNote}>
                <option value="0">No votado/a</option>
                <option value="10">10-Excelente</option>
                <option value="9">9-Muy bueno/a</option>
                <option value="8">8-Notable</option>
                <option value="7">7-Bueno/a</option>
                <option value="6">6-Interesante</option>
                <option value="5">5-Pasable</option>
                <option value="4">4-Regular</option>
                <option value="3">3-Flojo/a</option>
                <option value="2">2-Malo/a</option>
                <option value="1">1-Muy malo/a</option>
            </Form.Select>
        </Box>
    );
}