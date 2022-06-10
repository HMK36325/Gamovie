import React, { useEffect, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import useUser from "hooks/useUser";
import styledComponents from "styled-components";
import Modal from "components/Modal";
import Login from "components/Login";

import './voteCard.css';

const Box = styledComponents.div`
border: 5px solid #121416;
background-color: #212529;
border-radius: 5px;
color: #fff;

`;

export default function VoteCard({ url, nVotes, note, id, content }) {
    const src = url && url.startsWith('http') ? url : '../../images/' + url;
    const [userNote, setUserNote] = useState(0);
    const [voteId, setVoteId] = useState(0);
    const [isVoted, setIsVoted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false)
    const [showNoti, setShowNoti] = useState(false);


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

    useEffect(() => {
        const notiTimeOut = setTimeout(() => {
            setShowNoti(false)
            setIsDeleted(false)
        }, 3000)

        return () => clearTimeout(notiTimeOut)

    }, [setShowNoti, userNote])

    const handleClose = () => {
        setShowModal(false);
    }
    const handleLogin = () => {
        setShowModal(false);
    }

    const handleChange = (e) => {
        if (!isLogged) return setShowModal(true);

        setUserNote(e.target.value);
        if (e.target.value === '0') {
            removeVote({ vote_id: voteId, contentType: content });
            setIsDeleted(true)
        } else {
            setIsDeleted(false)
            isVoted && userNote !== '0'
                ? updateVote({ vote_id: voteId, contentType: content, note: e.target.value })
                : addVote({ content_id: id, contentType: content, note: e.target.value });
        }

        setShowNoti(true);

    }

    return (
        <div className="contenedor">
            <Box>
                {isVoted && <span className="votado">✅</span>}
                <div className="img-container"><img alt={url} src={src} className="img-fluid imgVote" /></div>
                <div className="info">
                    <div className="note">{note}</div>
                    <div className="votes">
                        <p>Votos</p>
                        {nVotes}
                    </div>
                </div>
            </Box>
            <Form.Select className="bg-light vote-select" onChange={handleChange} value={userNote}>
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
            {showNoti && <Alert variant={isDeleted ? 'warning' : 'success'} id="toasts">{isDeleted ? 'Voto eliminado!' : 'Voto añadido!'}</Alert>}
            {showModal && <Modal onClose={handleClose}><Login onLogin={handleLogin} isFromPortal={true} /></Modal>}
        </div>
    );
}