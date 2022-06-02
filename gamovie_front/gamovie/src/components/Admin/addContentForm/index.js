import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from 'formik'
import Admin from "hooks/useAdmin";

export default function addContentForm({ name, year, synopsis = '', contentType, setShowModal }) {
    const { addItem } = Admin()

    return <div className="d-flex justify-content-center">
        <Formik
            initialValues={{ name: name, director: '', distributor: '', synopsis: synopsis, year: year, category: '-', image: '', note: '-' }}

            validate={values => {
                const errors = {}

                if (!values.name || values.name.charAt(0) === '') {
                    errors.name = 'El nombre es necesario ⚠️'
                } else if (values.name.trim() === "") {
                    errors.name = 'El nombre  no puede estar en blanco ⚠️'
                } else if (values.name === "admin") { errors.name = 'Nice try 😎' }
                else if (values.name.indexOf(" ") < (values.name.length - 1)) {
                    const index = values.name.indexOf(" ");
                    if (values.name.charAt(index + 1) === " ") errors.name = 'Solo puede haber un espacio en blanco en el medio ⚠️'
                }

                if (contentType === 'movies' && !values.director) {
                    errors.director = 'El director es necesario ⚠️';
                }

                if (values.synopsis.trim() === "") {
                    errors.synopsis = 'La synopsis no puede estar en blanco ⚠️'
                } else if (values.synopsis.trim().length < 10) {
                    errors.synopsis = 'Debe incluir al menos 10 caracteres ⚠️'
                }
                if (!values.distributor) {
                    errors.distributor = 'El disribuidor es necesario ⚠️'
                }

                if (values.note === '-') {
                    errors.note = '⚠️'
                }
                if (values.category === '-') {
                    errors.category = '⚠️'
                }

                if (!values.image) {
                    errors.image = '⚠️'
                }
                else if (values.image.type !== 'image/jpeg' && values.image.type !== 'image/jpg') {
                    errors.image = 'Solo se admite .jpg/.jpeg ⚠️'
                } else if (values.image.size > 50000) {
                    errors.image = 'Máximo 50KB ⚠️'
                }


                return errors

            }}

            onSubmit={(values, { setFieldError }) => {

                const image = values.image
                const imgName = `${Date.now()}${values.image.name}`
                console.log(image)

                const content = contentType === 'movies' ? {
                    name: values.name,
                    director: values.director,
                    year: values.year,
                    distributor: values.distributor,
                    category: values.category,
                    synopsis: values.synopsis,
                    image: imgName,
                    n_votes: 10,
                    note: values.note,
                    content: contentType
                }
                    : {
                        name: values.name,
                        year: values.year,
                        distributor: values.distributor,
                        category: values.category,
                        synopsis: values.synopsis,
                        image: imgName,
                        n_votes: 10,
                        note: values.note,
                        content: contentType
                    }


                return addItem({ contentType, content }).then((res) => {
                    const formData = new FormData();
                    formData.append('file', image);
                    setShowModal(false);

                    fetch(`http://localhost:8080/auth/upload-images/${imgName}`, {
                        method: "POST",
                        body: formData
                    }).then(res => console.log(res))
                }).catch((err) => setFieldError('name', 'Este nombre ya existe'));

            }}
        >
            {
                ({ errors, isSubmitting, touched, setFieldValue }) =>
                    <Form className="mt-5 login-form add-form">
                        <div className="login-title mt-3 mb-3">
                            <h3>Añadir {contentType === 'movies' ? 'película' : 'juego'}.</h3>
                        </div>
                        <div className="input-form mb-3">
                            <label className="m-2">Nombre</label>
                            <Field
                                className={`form-control ${errors.name && touched.name ? 'error-input' : ''}`}
                                name="name"
                                type="text"
                                placeholder="Introduce un name"
                            />
                        </div>
                        {errors.name && touched.name ? (
                            <span className="form-error">{errors.name}</span>) : null}
                        {contentType === 'movies' && <div className="input-form mb-3 form-group">
                            <label className="m-2">Director</label>
                            <Field
                                className={`form-control ${errors.director && touched.director ? 'error-input' : ''}`}
                                name="director"
                                type="director"
                                placeholder="Introduce un director"
                            />
                        </div>}
                        {errors.director && touched.director ? (
                            <span className="form-error">{errors.director}</span>) : null}
                        <div className="input-form mb-3">
                            <label className="m-2">Productora</label>
                            <Field
                                className={`form-control ${errors.distributor && touched.distributor ? 'error-input' : ''}`}
                                name="distributor"
                                type="distributor"
                                placeholder="Introduce una Productora"
                            />
                        </div>
                        {errors.distributor && touched.distributor ? (
                            <span className="form-error">{errors.distributor}</span>) : null}
                        <div className="input-form mb-3">
                            <label className="m-2">Synopsis</label>
                            <Field
                                as='textarea'
                                className={`form-control ${errors.synopsis && touched.synopsis ? 'error-input' : ''}`}
                                name="synopsis"
                                type="text"
                                placeholder="Introduce una synopsis"
                            />
                        </div>
                        {errors.synopsis && touched.synopsis ? (
                            <span className="form-error">{errors.synopsis}</span>) : null}
                        <div className="input-group mb-3 d-flex justify-content-between">
                            <div className="input-form">
                                <label className="m-2">Nota</label>
                                <Field
                                    as='select'
                                    className={`form-select ${errors.note && touched.note ? 'error-input' : ''}`}
                                    name="note"
                                >
                                    <option value="-">-</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </Field>
                                {errors.note && touched.note ? (
                                    <span className="form-error">{errors.note}</span>) : null}
                            </div>
                            <div className="input-form">
                                <label className="m-2">Categoria</label>
                                <Field
                                    as='select'
                                    className={`form-select ${errors.category && touched.category ? 'error-input' : ''}`}
                                    name="category"
                                >
                                    {contentType === 'movies' ? <>
                                        <option value="-">-</option>
                                        <option value="Bélica">Bélica</option>
                                        <option value="Ciencia Ficción">Ciencia Ficción</option>
                                        <option value="Superhéroes">Superhéroes</option>
                                        <option value="Comedia">Comedia</option>
                                        <option value="Thriller">Thriller</option>
                                        <option value="Fantasía">Fantasía</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Western">Western</option>
                                    </>
                                        : <>
                                            <option value="-">-</option>
                                            <option value="RPG">RPG</option>
                                            <option value="Mundo Abierto">Mundo Abierto</option>
                                            <option value="Hack and Slash">Hack and Slash</option>
                                            <option value="Aventura">Aventura</option>
                                            <option value="Zombies">Zombies</option>
                                            <option value="Shooter">Shooter</option>
                                            <option value="SoulsLike">SoulsLike</option>
                                            <option value="Indie">Indie</option></>}
                                </Field>
                                {errors.category && touched.category ? (
                                    <span className="form-error">{errors.category}</span>) : null}
                            </div>
                            <div className="input-form w-25">
                                <label className="m-2">Año</label>
                                <Field
                                    className={`form-control ${errors.year && touched.year ? 'error-input' : ''}`}
                                    name="year"
                                    type="number"
                                    placeholder="Introduce una año"
                                />
                                {errors.year && touched.year ? (
                                    <span className="form-error">{errors.year}</span>) : null}
                            </div>
                        </div>
                        <div className="input-group mb-3 d-flex justify-content-between">
                            <div className="input-form">
                                <label className="m-2">Imagen</label>
                                <input
                                    className={`form-control ${errors.image && touched.image ? 'error-input' : ''}`}
                                    type="file"
                                    onChange={(event) => setFieldValue('image', event.target.files[0])}
                                />
                                {errors.image && touched.image ? (
                                    <span className="form-error">{errors.image}</span>) : null}
                            </div>
                        </div>
                        <Button type="submit" variant="success" className="mt-3 mb-3 w-100" disabled={isSubmitting}>
                            Añadir
                        </Button>
                    </Form>
            }
        </Formik>
    </div >
}