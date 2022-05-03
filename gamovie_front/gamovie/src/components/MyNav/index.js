import Context from "context/userContext";
import React, { useContext } from "react";
import { Navbar, Container, NavDropdown, Nav, Button, ButtonGroup } from "react-bootstrap";
import useUser from "hooks/useUser";

export default function MyNav() {
    const {isLogged, logout}=useUser();
    const {currentUser}= useContext(Context);

    const handleClick = e => {
        e.preventDefault();
        logout();
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">GAMOVIE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Videojuegos</Nav.Link>
                        <Nav.Link href="#pricing">Peliculas</Nav.Link>
                        <Nav.Link href="#pricing">Support</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            isLogged ?
                                <NavDropdown title={currentUser.username} id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Mis Votaciones</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Mis Reviews</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#" onClick={handleClick}>LogOut</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <ButtonGroup aria-label="Button group">
                                    <Button href="/login" variant="secondary">Login</Button>
                                    <Button href="/register" variant="secondary">Register</Button>
                                </ButtonGroup>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}