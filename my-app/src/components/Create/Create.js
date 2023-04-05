import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useContext } from 'react';
import { Contexts } from '../../contexts/Contexts';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import style from './Create.module.css';

function StaticExample() {
    const { onCreateSubmit, auth, error } = useContext(Contexts)

    const {values, changeHandler, onSubmit} = useForm({
        titile: '',
        location: '',
        imageUrl: '',
        description: '',
        userEmail: auth.email
    }, onCreateSubmit);

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
                            <Form.Control type="text" placeholder="What a trip..." name='titile' value={values.titile} onChange={changeHandler} />
                            {error === 'Fields required!' && values.titile.length === 0 && <Form.Label className={style.error}>{error}</Form.Label>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Barcelona..." name='location' value={values.location} onChange={changeHandler} />
                            {error === 'Fields required!' && values.location.length === 0 && <Form.Label className={style.error}>{error}</Form.Label>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="http://..." name='imageUrl' value={values.imageUrl} onChange={changeHandler} />
                            {error === 'Fields required!' && values.imageUrl.length === 0 && <Form.Label className={style.error}>{error}</Form.Label>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="My trip was..." name='description' value={values.description} onChange={changeHandler} />
                            {error === 'Fields required!' && values.description.length === 0 && <Form.Label className={style.error}>{error}</Form.Label>}
                        </Form.Group>

                        <Button as={Link} to='/' variant="secondary">Close</Button>
                        <Button className={style.createBtn} type='submit' variant="primary">Create</Button>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
}

export default StaticExample;