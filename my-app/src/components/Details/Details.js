import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Contexts } from '../../contexts/Contexts';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import * as postService from '../../services/postService'

import AlwaysOpenExample from './MoreInfo';
import { CardDetails } from './CardDetails';
import style from './Details.module.css';
import { AddComment } from './AddComment';

function ImgOverlayExample() {
    const [post, setPost] = useState({})
    const { auth, isAuth } = useContext(Contexts)
    const { postId } = useParams();
    const isOwner = post._ownerId === auth._id;

    useEffect(() => {
        postService.getOne(postId)
            .then(res => setPost(res))
    }, [postId])

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
                                    <p><span>ali@abv.bg:</span> Best Trip!</p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                {!isOwner && isAuth &&
                    <AddComment />
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