import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import useUser from "hooks/useUser";
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

export default function VoteCard({ url, nVotes, note, id, content, setShowNoti }) {
    const src = url && url.startsWith('http') ? url : '../../images/' + url;
    const [userNote, setUserNote] = useState(0);
    const [voteId, setVoteId] = useState(0);
    const [isVoted, setIsVoted] = useState(false);


    const { isLogged, movieVotes, gameVotes, addVote, updateVote, removeVote } = useUser();

    useEffect(() => {
        if (content === 'movies') {
            movieVotes.forEach((vote) => {
                if (vote.movie.id === id) {
                    isVoted ? setUserNote(vote.vote) : setUserNote(vote.note)
                    setVoteId(vote.id)
                    setIsVoted(true);
                }
            })
        } else {
            gameVotes.forEach((vote) => {
                if (vote.game.id === id) {
                    isVoted ? setUserNote(vote.vote) : setUserNote(vote.note)
                    setVoteId(vote.id)
                    setIsVoted(true);
                }
            })
        }

    }, [id, content, movieVotes, gameVotes, isVoted])

    const handleChange = (e) => {
        if (!isLogged) return setShowNoti(true);
        setUserNote(e.target.value);
        if (e.target.value === '0') {
            removeVote({ vote_id: voteId, contentType: content });
        } else isVoted
            ? updateVote({ vote_id: voteId, contentType: content, note: e.target.value })
            : addVote({ content_id: id, contentType: content, note: e.target.value });

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