import AddGameCard from "components/Admin/addGameCard"
import AddMovieCard from "../addMovieCard";
import useAddContent from "hooks/useAddContent";
import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";

export default function ShowResults({ contentType, keyword }) {
    const { searchedContent, loading } = useAddContent({ contentType: contentType, keyword: keyword })
    return <>
        {
            loading ? <Spinner animation="border" className="loading" />
                : <Row className="mt-5">
                    {contentType === 'movies' ? <>
                        {
                            searchedContent.map((content) => {
                                return <Col lg="4" key={content.iamge} className="d-flex justify-content-center">
                                    <AddMovieCard key={content.iamge} img={content.image} name={content.name} year={content.year} synopsis={content.synopsis}/>
                                </Col>
                            })
                        }
                    </>
                        : <>
                            {
                                searchedContent.map((content) => {
                                    return <Col lg="6" key={content.iamge}>
                                        <AddGameCard key={content.iamge} img={content.image} name={content.name} year={content.year} />
                                    </Col>
                                })
                            }
                        </>
                    }
                </Row>
        }
    </>
}