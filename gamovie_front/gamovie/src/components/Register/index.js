import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from 'formik'
import { Link } from "wouter";
import register from "services/register";

export default function Register() {

    const [registered, setRegistered] = useState(false)

    return <div className="d-flex justify-content-center">
        {registered
            ? <div className="mt-5 text-center">
                <h4>
                    Felicidades ✅! Te has registrado correctamente en GAMOVIE!
                </h4>
                <Link to="/login">Logeate</Link>
            </div>
            : <Formik
                initialValues={{ username: '', email: '', password: '', password2: '' }}

                validate={values => {
                    const errors = {}

                    if (!values.username || values.username.charAt(0) === '') {
                        errors.username = 'El nombre de usuario es necesario ⚠️'
                    } else if (values.username.trim() === "") {
                        errors.username = 'El nombre de usuario no puede estar en blanco ⚠️'
                    } else if (values.username.indexOf(" ") < (values.username.length - 1)) {
                        const index = values.username.indexOf(" ");
                        if (values.username.charAt(index + 1) === " ") errors.username = 'Solo puede haber un espacio en blanco en el medio ⚠️'
                    } else if (values.username.trim() === "admin") errors.username = 'Nice try 😎'

                    if (!values.email) {
                        errors.email = 'El email es necesario ⚠️';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                        errors.email = 'El email no es valido ⚠️';
                    }


                    if (!values.password) {
                        errors.password = 'La contraseña es necesaria ⚠️'
                    } else if (values.password.length <= 6) {
                        errors.password = 'La longuitud de la contraseña debe ser mayor a 6 ⚠️'
                    } else if (values.password !== values.password2) errors.password = 'Las contraseñas no coinciden ⚠️'

                    if (values.password.trim() === "") errors.password = 'Introduce una contraseña ⚠️'

                    return errors

                }}

                onSubmit={(values, { setFieldError }) => {
                    const user = {
                        username: values.username.trim(),
                        email: values.email,
                        password: values.password
                    }
                    console.log(user)
                    return register(user)
                        .then(() => {
                            setRegistered(true)
                        })
                        .catch(() => {
                            console.log('error')
                            setFieldError('username', 'El usuario no es valido')
                        })
                }}
            >
                {
                    ({ errors, isSubmitting, touched }) =>
                        <Form className="mt-5 login-form">
                            <div className="login-title mt-3 mb-3">
                                <h3>Registro en Gamovie</h3>
                            </div>
                            <div className="input-form mb-3">
                                <label className="m-2">Username</label>
                                <Field
                                    className={`form-control ${errors.username && touched.username ? 'error-input' : ''}`}
                                    name="username"
                                    type="text"
                                    placeholder="Introduce un username"
                                />
                            </div>
                            {errors.username && touched.username ? (
                                <span className="form-error">{errors.username}</span>) : null}
                            <div className="input-form mb-3 form-group">
                                <label className="m-2">Email</label>
                                <Field
                                    className={`form-control ${errors.email && touched.password ? 'error-input' : ''}`}
                                    name="email"
                                    type="email"
                                    placeholder="Introduce un email"
                                />
                            </div>
                            {errors.email && touched.email ? (
                                <span className="form-error">{errors.email}</span>) : null}
                            <div className="input-form mb-3">
                                <label className="m-2">Password</label>
                                <Field
                                    className={`form-control ${errors.password && touched.password2 ? 'error-input' : ''}`}
                                    name="password"
                                    type="password"
                                    placeholder="Introduce una contraseña"
                                />
                                <Field
                                    className={`form-control mt-3 ${errors.password && touched.password2 ? 'error-input' : ''}`}
                                    name="password2"
                                    type="password"
                                    placeholder="Vuelve a introducir la contraseña"
                                />
                            </div>
                            {errors.password && touched.password2 ? (
                                <span className="form-error">{errors.password}</span>) : null}
                            <Button type="submit" className="mt-3 mb-3 w-100 btn-dark bg-btn" disabled={isSubmitting}>
                                Registrarse
                            </Button>
                            <p className="text-center">¿Ya tienes cuenta?<Link to="/login">Logeate aquí...</Link></p>
                        </Form>

                }
            </Formik>
        }
    </div>
}