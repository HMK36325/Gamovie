import Context from "context/userContext";
import React, { useContext, useState } from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Button,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import useUser from "hooks/useUser";
import { Link, useLocation } from "wouter";
import SearchBox from "components/SearchBox";
import './nav.css';

export default function MyNav() {
  const { isLogged, logout } = useUser();
  const [, navigate] = useLocation();
  const { isAdmin, currentUser, isPremium } = useContext(Context);
  const [showSearch, setShowSearch] = useState(false)
  const [keyword, setKeyword] = useState("");


  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  const handleChange = (e) => {
    const actualKeyword = e.target.value;
    setKeyword(actualKeyword);
    if (actualKeyword.length > 0 && actualKeyword.trim() !== "") {
      setShowSearch(true)
    } else setShowSearch(false)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.length > 0 && keyword.trim() !== "") {
      navigate(`/search/${keyword}`)
      setShowSearch(false)
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">GAMOVIE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form className="form w-100" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" className="form-control search-input" placeholder="Busca aquí..." onChange={handleChange} />
                <span className="input-group-btn ">
                  <button className="btn btn-default seacrh-btn" type="submit">
                    🔍
                  </button>
                </span>
              </div>
              {showSearch && <SearchBox keyword={keyword} setShowSearch={setShowSearch} />}
            </Form>
            <Nav.Link href="/games">Videojuegos</Nav.Link>
            <Nav.Link href="/movies">Peliculas</Nav.Link>
            <Nav.Link href="/support">Soporte</Nav.Link>
          </Nav>
          <Nav>
            {isLogged ? (
              <NavDropdown
                title={currentUser.username}
                id="collasible-nav-dropdown"
              >
                {!isAdmin ? <>
                  <NavDropdown.Item href="/votes">
                    Mis Votaciones 🎞️
                  </NavDropdown.Item>
                  {isPremium ?
                    <NavDropdown.Item href="/reviews">
                      Mis Reviews 📖
                    </NavDropdown.Item>
                    : <NavDropdown.Item href="/premium">
                      Premium
                    </NavDropdown.Item>
                  }
                </>
                  : <Link className="dropdown-item" to="/admin">Admin</Link>}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" onClick={handleClick}>
                  LogOut↩️
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <ButtonGroup aria-label="Button group">
                <Button href="/login" variant="secondary" className="bg-btn">
                  Login
                </Button>
                <Button href="/register" variant="secondary" className="bg-btn">
                  Register
                </Button>
              </ButtonGroup>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
