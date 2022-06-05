import AddGameCard from "components/Admin/addGameCard"
import AddMovieCard from "../addMovieCard";
import useAddContent from "hooks/useAddContent";
import React, { useState, useEffect } from "react";
import { Col, Row, Spinner, Alert } from "react-bootstrap";

export default function ShowResults({ contentType, keyword }) {
    const { searchedContent, loading } = useAddContent({ contentType: contentType, keyword: keyword })
    const [showNoti, setShowNoti] = useState(false);

    useEffect(() => {
        const notiTimeOut = setTimeout(() => {
            setShowNoti(false)
        }, 3000)

        return () => clearTimeout(notiTimeOut)

    }, [setShowNoti, showNoti])
    return <>
        {
            loading ? <Spinner animation="border" className="loading" />
                : <Row className="mt-5">
                    {contentType === 'movies' ? <>
                        {
                            searchedContent.map((content) => {
                                return <Col lg="4" key={content.iamge} className="d-flex justify-content-center">
                                    <AddMovieCard key={content.iamge} img={content.image} name={content.name} year={content.year} synopsis={content.synopsis} setShowNoti={setShowNoti} />
                                </Col>
                            })
                        }
                    </>
                        : <>
                            {
                                searchedContent.map((content) => {
                                    return <Col lg="6" key={content.iamge}>
                                        <AddGameCard key={content.iamge} img={content.image} name={content.name} year={content.year} setShowNoti={setShowNoti} />
                                    </Col>
                                })
                            }
                        </>
                    }
                    {showNoti && <Alert variant='success' className="review-noti">{contentType === 'movies' ? 'Película añadida!' : 'Juego añadido'}</Alert>}
                </Row>

        }
    </>
}