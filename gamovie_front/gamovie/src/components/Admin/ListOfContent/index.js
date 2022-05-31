import useCards from "hooks/useCards";
import React from "react";
import { Spinner, Table, Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import ContentInfo from "../ContentInfo";
import './listOfContent.css'

export default function ListOfContent({ contentType, setContentToShow }) {

    const { cards, page, totalPages, loadginNextPage, setPage } = useCards({ content: contentType })

    const handlePageClick = (data) => {
        setPage(data.nextSelectedPage);
    }
    const handleAdd = () => {
        setContentToShow(`${contentType}Add`)
    }

    return <div className="table-responsive">
        {loadginNextPage ? <Spinner animation="border" className="loading" />
            : <>
                <div className="show-options">
                    <ReactPaginate
                        previousLabel={'Anterior'}
                        nextLabel={'Siguiente'}
                        breakLabel={'...'}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={3}
                        pageCount={totalPages}
                        forcePage={page}
                        onClick={handlePageClick}
                        containerClassName={'pagination'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        activeClassName={'active'}
                        renderOnZeroPageCount={null}
                        eventListener={'onClick'}
                        style={loadginNextPage ? "display: none" : ""}
                    />
                    <Button variant="success" onClick={handleAdd}>Añadir {contentType === 'movies' ? <>Película</> : <>Juego</>}</Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Productora</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards && cards.map(content => {
                            return < ContentInfo key={content.id} id={content.id} name={content.name} productora={content.distributor} img={content.image} contentType={contentType} />
                        })}

                    </tbody>
                </Table>
            </>
        }
    </div>
}