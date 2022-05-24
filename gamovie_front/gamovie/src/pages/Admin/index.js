import React, { useState, useContext } from "react";
import Context from "context/userContext";
import Users from "components/Admin/ListOfUsers";
import useAdmin from "hooks/useAdmin";
import { Container, Button } from "react-bootstrap";

export default function AdminUsers() {
    const { isAdmin } = useContext(Context);
    if (!isAdmin) window.location.href = "../../unauthorized.html"

    const { users, page, setPage, totalPages, loading } = useAdmin();
    const [contentToShow, setContentToShow] = useState('users')

    const handleClick = (e) => {
        setContentToShow(e.target.value)
    }

    return <Container>
        <h1 className="text-center m-4">Panel de Administrador</h1>
        <div className="text-center m-5">
            <Button className="bg-btn m-2" value={"users"} onClick={handleClick}>Usuarios</Button>
            <Button className="bg-btn m-2" value={"movies"} onClick={handleClick}>Películas</Button>
            <Button className="bg-btn m-2" value={"games"} onClick={handleClick}>Videojuegos</Button>
        </div>
        {contentToShow === 'users' ? <Users users={users} totalPages={totalPages} setPage={setPage} page={page} loading={loading} />
            : contentToShow === 'movies' ? <p>Movies</p>
            : <p>Games</p>
        }
    </Container>
}