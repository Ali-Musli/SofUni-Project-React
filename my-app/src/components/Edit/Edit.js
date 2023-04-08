import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as postService from '../../services/postService';

import style from './Edit.module.css';

export const Edit = ({
    onEditSubmit,
    err
}) => {
    const [post, setPost] = useState({
        titile: '',
        location: '',
        imageUrl: '',
        description: ''
    })

    const onChange = (e) => {
        setPost(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onEditSubmit(postId, post);
    }

    const { postId } = useParams();

    useEffect(() => {
        postService.getOne(postId)
            .then(res => setPost(res));
    }, [postId]);

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
                            {err === 'required!' && post.titile.length === 0 &&
                                <Form.Label className={style.error}>Title is {err}</Form.Label>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Barcelona..." name='location' value={post.location} onChange={onChange} />
                            {err === 'required!' && post.location.length === 0 &&
                                <Form.Label className={style.error}>Location is {err}</Form.Label>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="http://..." name='imageUrl' value={post.imageUrl} onChange={onChange} />
                            {err === 'required!' && post.imageUrl.length === 0 &&
                                <Form.Label className={style.error}>Image is {err}</Form.Label>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="My trip was..." name='description' value={post.description} onChange={onChange} />
                            {err === 'required!' && post.description.length === 0 &&
                                <Form.Label className={style.error}>Description is {err}</Form.Label>
                            }
                        </Form.Group>
                        <Button as={Link} to={`/details/${post._id}`} variant="secondary">Close</Button>
                        <Button className={style.createBtn} type='submit' variant="primary">Save</Button>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div>

    )
}