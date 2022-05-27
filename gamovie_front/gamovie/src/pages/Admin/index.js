import React, { useContext } from "react";
import Context from "context/userContext";
import Users from "components/Admin/ListOfUsers";
import useAdmin from "hooks/useAdmin";
import { Container } from "react-bootstrap";
import { atom, useRecoilState } from "recoil";
import ListOfContent from "components/Admin/ListOfContent";
import './admin.css';

const defaultContent = atom({
    key: "contentToShow",
    default: "users"
})

export default function AdminUsers() {
    const { isAdmin } = useContext(Context);
    if (!isAdmin) window.location.href = "../../unauthorized.html"

    const { users, page, setPage, totalPages, loading } = useAdmin();
    const [contentToShow, setContentToShow] = useRecoilState(defaultContent)

    const handleClick = (e) => {
        setContentToShow(e.target.value)
    }

    return <Container>
        <h1 className="text-center m-4">Panel de Administrador</h1>
        <div className="contentToShow">
            <div className="m-5 btn-group individual" role="group">
                <input type="radio" id="users" value="users" name="content" className="form-check-input btn-check" checked={contentToShow === 'users'} onChange={handleClick} />
                <label className="form-check-label btn btn-outline-primary" htmlFor="users">Usuarios</label>
                <input type="radio" id="movies" value="movies" name="content" className="form-check-input btn-check" checked={contentToShow === 'movies'} onChange={handleClick} />
                <label className="form-check-label btn btn-outline-primary" htmlFor="movies">Películas</label>
                <input type="radio" id="games" value="games" name="content" className="form-check-input btn-check" checked={contentToShow === 'games'} onChange={handleClick} />
                <label className="form-check-label btn btn-outline-primary" htmlFor="games">Videojuegos</label>
            </div>
        </div>
        {contentToShow === 'users' ? <Users users={users} totalPages={totalPages} setPage={setPage} page={page} loading={loading} />
            : contentToShow === 'movies' ? <ListOfContent contentType="movies" />
                : <ListOfContent contentType="games" />
        }
    </Container>
}