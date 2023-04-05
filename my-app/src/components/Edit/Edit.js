import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import style from './Edit.module.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as postService from '../../services/postService';
import { Link } from 'react-router-dom';

export const Edit = ({
    onEditSubmit
}) => {
    const [post, setPost] = useState({
        titile: '',
        location: '',
        imageUrl: '',
        description: ''
    })

    const onChange = (e) => {
        setPost(state => ({...state, [e.target.name]: e.target.value}));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onEditSubmit(postId, post)
    }

    const { postId } = useParams()

    useEffect(() => {
        postService.getOne(postId)
        .then(res => setPost(res))
    }, [postId])
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="What a trip..." name='titile' value={post.titile} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Barcelona..." name='location' value={post.location} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="http://..." name='imageUrl' value={post.imageUrl} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="My trip was..." name='description' value={post.description} onChange={onChange} />
                        </Form.Group>

                        <Button as={Link} to={`/details/${post._id}`} variant="secondary">Close</Button>
                        <Button className={style.createBtn} type='submit' variant="primary">Save</Button>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div>

    )
}