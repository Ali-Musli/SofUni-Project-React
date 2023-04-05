import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

import { useState, useContext } from 'react';
import { Contexts } from '../../contexts/Contexts';
import style from './Register.module.css';
import { useForm } from '../../hooks/useForm';

function Register() {
    const { onRegisterSubmit, error } = useContext(Contexts)

    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: ''
    }, onRegisterSubmit)

    return (
        <div className={style.bgImage}>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title>Register Form</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="ivan@abv.bg" name='email' value={values.email} onChange={changeHandler} />
                                {error === 'Fields required!' && values.email.length === 0 &&
                                    <Form.Label className={style.error}>{error}</Form.Label>
                                }

                                {error === 'A user with the same email already exists' &&
                                    <Form.Label className={style.error}>{error}</Form.Label>
                                }
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="*******" name='password' value={values.password} onChange={changeHandler} />
                                {error === 'Fields required!' && values.password.length === 0 &&
                                    <Form.Label className={style.error}>{error}</Form.Label>
                                }

                                {error === 'Your password must be 4-10 characters long' && values.password.length > 0 &&
                                    <Form.Label className={style.error}>{error}</Form.Label>
                                }
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="*******" name='confirmPassword' value={values.confirmPassword} onChange={changeHandler} />
                                {error === 'Fields required!' && values.confirmPassword.length === 0 &&
                                    <Form.Label className={style.error}>{error}</Form.Label>
                                }

                                {error === 'Password not match!' &&
                                    <Form.Label className={style.error}>{error}</Form.Label>
                                }
                            </Form.Group>

                            <Button as={Link} to='/' variant="secondary">Close</Button>
                            <Button className={style.createBtn} type='submit' variant="primary">Register</Button>
                        </Form>
                    </Modal.Body>
                    <Link to='/login' className={style.linkbtn}>Already have an account? <span>Login</span></Link>
                </Modal.Dialog>
            </div>
        </div>
    );
}

export default Register;