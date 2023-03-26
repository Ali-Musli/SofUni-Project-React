import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useContext } from 'react';
import { Contexts } from '../../contexts/Contexts';

import style from './Create.module.css';

function StaticExample() {
    const [values, setValues] = useState({
        titile: '',
        description: '',
        imageUrl: '',
    });

    const { onCreateSubmit } = useContext(Contexts)

    const onChange = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateSubmit(values)
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
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="What a trip..." name='titile' value={values.titile} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Best weekend ever..." name='description' value={values.description} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="http://..." name='imageUrl' value={values.imageUrl} onChange={onChange} />
                        </Form.Group>

                        <Button variant="secondary">Close</Button>
                        <Button className={style.createBtn} type='submit' variant="primary">Create</Button>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
}

export default StaticExample;