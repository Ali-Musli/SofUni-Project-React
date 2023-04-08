import { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Contexts } from '../../../contexts/Contexts';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import * as postService from '../../../services/postService';
import * as commentService from '../../../services/commentService';

import { CardDetails } from '../CardDetails/CardDetails';
import {AddComment} from '../AddComments/AddComment';


import style from './Details.module.css';

function ImgOverlayExample() {
    const [post, setPost] = useState({});
    const [comments, setComment] = useState([]);

    const { auth, isAuth } = useContext(Contexts);
    const { postId } = useParams();

    const isOwner = post._ownerId === auth._id;

    useEffect(() => {
        postService.getOne(postId)
            .then(res => setPost(res));

        getAllComments();
    }, [postId]);

    const getAllComments = async () => {
        const response = await commentService.getAll();
        const res = response.filter(function (post) {
            return post.postId === postId;
        })
        setComment(res);
    }

    const addComments = (data) => {
        setComment(state => [...state, data]);
    }

    const onDelButtonClick = async (id) => {
        if (window.confirm('Do you really want to delete this comment?')) {
            await commentService.del(id, auth.accessToken);
            setComment(state => state.filter(x => x._id !== id));
        }
    }

    return (
        <div className={style.bgImage}>
            <Card className={style.card} bg='light'>
                <Card.Img variant="top" src={post.imageUrl} className={style.imageUrl} />
                <CardDetails {...post} />

                <div className={style.comments}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Comments</Accordion.Header>
                            <Accordion.Body>
                                <div className={style.comments}>
                                    {comments.length !== 0 ? comments.map(x =>
                                        <div key={x._id} className={style.newComment}>
                                            <p><span>{x.ownerEmail}: </span>{x.comment}</p>
                                            {x._ownerId === auth._id &&
                                                <>
                                                    <Button className={style.delBtn} size='sm' onClick={() => onDelButtonClick(x._id)} variant="danger">Delete</Button>{' '}
                                                </>
                                            }
                                        </div>) :
                                        <h1 className={style.noComment}>No Comments Yet</h1>}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                {!isOwner && isAuth &&
                    <AddComment {...post} addComments={addComments} />
                }
                {isOwner ?
                    <>
                        <Button className={style.btns} as={Link} to={`/edit/${post._id}`}>Edit</Button>{' '}
                        <Button className={style.btns} as={Link} to={`/delete/${post._id}`}>Delete</Button>{' '}
                    </>
                    :
                    <p>You want to learn more about this post? Contact the owner on email: <span className={style.spann}>{post.userEmail}</span></p>
                }
            </Card>
        </div>
    );
}

export default ImgOverlayExample;