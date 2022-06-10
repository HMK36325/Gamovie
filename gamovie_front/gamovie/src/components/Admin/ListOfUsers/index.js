import React, { useState, useEffect } from "react";
import UserInfo from "../UserInfo";
import { Spinner, Table, Alert } from 'react-bootstrap'
import ReactPaginate from "react-paginate";

export default function ListOfUsers({ users, setPage, totalPages, page, loading }) {
    const [showNoti, setShowNoti] = useState({ show: false, isBan: false });

    useEffect(() => {
        const notiTimeOut = setTimeout(() => {
            setShowNoti({ show: false, isBan: false })
        }, 3000)

        return () => clearTimeout(notiTimeOut)

    }, [setShowNoti, showNoti])

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
                            return < UserInfo key={user.id} id={user.id} name={user.name} roles={user.roles} email={user.email} banned={user.banned_at} setShowNoti={setShowNoti} />
                        })}

                    </tbody>
                </Table>
                {showNoti.show && <Alert variant={showNoti.isBan ? 'warning' : 'success'} className="review-noti">{showNoti.isBan ? 'Usuario baneado!' : 'Usuario desbaneado!'}</Alert>}
            </>
        }
    </div>
}