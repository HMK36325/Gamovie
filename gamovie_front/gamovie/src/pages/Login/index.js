import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Form, Button, Alert } from "react-bootstrap";
import { useLocation } from "wouter";

import './login.css'


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, navigate] = useLocation();
    const { isLogged, login, isLoginLoading, hasLoginError } = useUser()

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password });
    }
    return (
        <>
            {
                isLoginLoading && <Spinner animation="border" />
            }
            {
                !isLoginLoading &&
                <Form onSubmit={handleSubmit} className="mt-5">
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
                    </Form.Group >
                    {
                        hasLoginError && <Alert variant="danger">Credentials are invalid!</Alert>
                    }
                    <Button type="submit" className="mt-3 mb-3 w-100 btn-dark">Login</Button>
                </Form >
            }
        </>
    );
}