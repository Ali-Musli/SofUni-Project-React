import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

import { useState } from 'react';


import style from './Login.module.css'

import { useContext } from 'react';
import { Contexts } from '../../contexts/Contexts';
import { useForm } from '../../hooks/useForm';


function TextControlsExample() {
    const { onLoginSubmit, error } = useContext(Contexts)


    const {values, changeHandler, onSubmit} = useForm({
        email: '',
        password: ''
    }, onLoginSubmit)

    return (
        <div className={style.bgImage}>

            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>

                    <Modal.Header >
                        <Modal.Title className={style.title}>Login Form</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="ivan@abv.bg"
                                    name='email'
                                    value={values.email}
                                    onChange={changeHandler}
                                />
                                {error === 'Fields required!' && values.email.length === 0 &&
                                    <Form.Label className={style.error}>{error}</Form.Label>
                                }

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="*******"
                                    name='password'
                                    value={values.password}
                                    onChange={changeHandler}
                                />
                                {error === 'Fields required!' && values.password.length === 0 &&
                                    <Form.Label className={style.error}>{error}</Form.Label>
                                }
                                {error === "Login or password don't match" &&
                                    <Form.Label className={style.error}>{error}</Form.Label>
                                }

                            </Form.Group>

                            <Button as={Link} to='/' variant="secondary">Close</Button>
                            <Button className={style.createBtn} type='submit' variant="primary">Login</Button>
                        </Form>
                    </Modal.Body>
                    <Link to='/register' className={style.linkbtn}>Create and acccount <span>Register</span></Link>
                </Modal.Dialog>
            </div>
        </div>
    );
}

export default TextControlsExample;