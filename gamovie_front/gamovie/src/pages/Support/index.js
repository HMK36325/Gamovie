import React, { useState, useContext } from "react";
import Context from "context/userContext";
import { useLocation } from "wouter";
import emailjs from 'emailjs-com'
import { Form, Spinner } from 'react-bootstrap'
import { Button } from "react-bootstrap";

export default function SupportPage() {
    const [subjectError, setSubjectError] = useState('')
    const [messageError, setMessageError] = useState('')
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [isSend, setIsSend] = useState(false)
    const [, navigate] = useLocation()
    const { currentUser } = useContext(Context)


    if (!currentUser) navigate('/login')

    const handleSubject = (e) => {
        if (!e.target.value) {
            setSubjectError('Campo obligatorio ⚠️')
        } else setSubjectError('')
    }
    const handleMessage = (e) => {
        if (!e.target.value) {
            setMessageError('Campo obligatorio ⚠️')
        } else setMessageError('')
    }
    const backToHome = () => {
        const backTimeOut = setTimeout(() => {
            setIsSend(false)
            navigate('/')
        }, 3000)

        return () => clearTimeout(backTimeOut)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmiting(true)
        if (!subjectError && !messageError) {
            emailjs.sendForm('service_xlb9and', 'template_p4hzb5p', e.target, 'BM-KmsRVnmWJ1uisl')
                .then((result) => {
                    console.log(result.text);
                    setIsSend(true)
                    setIsSubmiting(false);
                    backToHome();
                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    return <>
        {!isSend ? <div className="d-flex justify-content-center">
            <Form className="mt-5 login-form" onSubmit={handleSubmit}>
                <div className="login-title mt-3 mb-3">
                    <h3>Soporte GAMOVIE</h3>
                </div>
                <div className="input-form mb-3">
                    <Form.Label className="m-2">Nombre</Form.Label>
                    <Form.Control
                        className={`form-control`}
                        name="name"
                        type="text"
                        defaultValue={currentUser.username}
                        placeholder="Introduce un nombre"
                    />
                </div>
                <div className="input-form mb-3 form-group">
                    <Form.Label className="m-2">Email</Form.Label>
                    <Form.Control
                        className={`form-control`}
                        name="email"
                        type="email"
                        defaultValue={currentUser.email}
                        placeholder="Introduce un email"
                    />
                </div>
                <div className="input-form mb-3">
                    <Form.Label className="m-2">Asunto</Form.Label>
                    <Form.Control
                        className={`form-control ${subjectError ? 'error-input' : ''}`}
                        name="subject"
                        type="text"
                        placeholder="Introduce un asunto"
                        onChange={handleSubject}
                    />
                </div>
                {subjectError ? (
                    <span className="form-error">{subjectError}</span>) : null}
                <div className="input-form mb-3">
                    <Form.Label className="m-2">Mensaje</Form.Label>
                    <Form.Control
                        as='textarea'
                        className={`form-control ${messageError ? 'error-input' : ''}`}
                        name="message"
                        type="text"
                        placeholder="Introduce una mensaje"
                        onChange={handleMessage}
                    />
                </div>
                {messageError ? (
                    <span className="form-error">{messageError}</span>) : null}
                <Button type="submit" className="mt-3 mb-3 w-100 btn-dark bg-btn" disabled={isSubmiting}>
                    {isSubmiting ? <Spinner animation="border" /> : 'Enviar'}
                </Button>
            </Form>

        </div>
            : <h2 className="text-center mt-5">Gracias ✅! Su mensaje ha sido enviado con exito!</h2>}
    </>
}
