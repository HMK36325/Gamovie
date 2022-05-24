import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "wouter";
import { defaultRegistered } from "components/Register";
import { useLocation } from "wouter";
import { useRecoilValue } from "recoil";

import "./login.css";

export default function Login({ onLogin, isFromPortal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, navigate] = useLocation();
  const registered = useRecoilValue(defaultRegistered)
  const { isLogged, login, isLoginLoading, hasLoginError ,isBanned } = useUser();

  useEffect(() => {
    if (isLogged) {
      if (!isFromPortal) {
        navigate("/")
      }
      onLogin && onLogin()
    }
  }, [isLogged, navigate, isFromPortal, onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };
  return (
    <>
      {isLoginLoading && <Spinner animation="border" className="loading" />}
      {!isLoginLoading && (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
          {registered &&
            <div className="text-center">
              <h4>
                Felicidades ✅! Te has registrado correctamente en GAMOVIE!
              </h4>
              <p>Inicia sesión, por favor</p>
            </div>}
          <Form onSubmit={handleSubmit} className="mt-3 login-form">
            <div className="login-title mt-3 mb-3">
              <h3>Log In</h3>
            </div>
            <Form.Group className="input-form mb-3">
              <Form.Label className="m-2">Username</Form.Label>
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
                type="text"
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group className="input-form mb-3">
              <Form.Label className="m-2">Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            {hasLoginError && (
              <Alert variant="danger">Usuario y contraseña incorrectos!</Alert>
            )}
            {isBanned &&(
              <Alert variant="danger">La cuenta ha sido suspendida!</Alert>
            )}
            <Button type="submit" className="mt-3 mb-3 w-100 btn-dark bg-btn">
              Login
            </Button>
            <p className="text-center">¿No tienes cuenta?<Link to="/register"> Registrate aquí...</Link></p>
          </Form>
        </div>
      )}
    </>
  );
}
