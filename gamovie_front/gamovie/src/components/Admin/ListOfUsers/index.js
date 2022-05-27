import React from "react";
import UserInfo from "../UserInfo";
import { Spinner, Table } from 'react-bootstrap'
import ReactPaginate from "react-paginate";

export default function listOfUsers({ users, setPage, totalPages, page, loading }) {

    const handlePageClick = (data) => {
        setPage(data.nextSelectedPage);
    }

    return <div className="table-responsive">
        {loading ? <Spinner animation="border" className="loading" />
            : <>
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
                    style={loading ? "display: none" : ""}
                />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Roles</th>
                            <th scope="col">Ban</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(user => {
                            return < UserInfo key={user.id} id={user.id} name={user.name} roles={user.roles} email={user.email} banned={user.banned_at} />
                        })}

                    </tbody>
                </Table>
            </>
        }
    </div>
}