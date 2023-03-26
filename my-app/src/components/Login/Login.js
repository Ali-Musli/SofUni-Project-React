import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';


import style from './Login.module.css'

import { useContext } from 'react';
import { Contexts } from '../../contexts/Contexts';

function TextControlsExample() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const { onLoginSubmit } = useContext(Contexts)

    const onChange = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onLoginSubmit(values)
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

                        <Button variant="secondary">Close</Button>
                        <Button className={style.createBtn} type='submit' variant="primary">Create</Button>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
}

export default TextControlsExample;