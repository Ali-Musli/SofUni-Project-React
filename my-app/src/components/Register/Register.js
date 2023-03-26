import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState, useContext } from 'react';
import { Contexts } from '../../contexts/Contexts';
import style from './Register.module.css';

function Register() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { onRegisterSubmit } = useContext(Contexts)

    const onChange = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onRegisterSubmit(values)
    }
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Crate Post</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="ivan@abv.bg" name='email' value={values.email} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="" name='password' value={values.password} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="" name='confirmPassword' value={values.confirmPassword} onChange={onChange} />
                        </Form.Group>

                        <Button variant="secondary">Close</Button>
                        <Button className={style.createBtn} type='submit' variant="primary">Create</Button>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
}

export default Register;