import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import * as commentService from '../../../services/commentService'

import { useContext, useState } from 'react';
import { Contexts } from '../../../contexts/Contexts';

import style from './AddComments.module.css';

export const AddComment = ({
    _id,
    addComments
}) => {
    const { auth } = useContext(Contexts)
    const onLoginSubmit = async (data) => {
        const datainfo = {
            comment: data,
            ownerEmail: auth.email,
            postId: _id
        }
        
        const response = await commentService.create(datainfo, auth.accessToken);
        addComments(response)
        
    }

    const [comment, setValues] = useState('')

    const changeHandler = (e) => {
        setValues(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onLoginSubmit(comment)
        setValues('')
    }

    return (
        <div className={style.addComment}>
            <Form onSubmit={onSubmit}>
                <Row>

                    <Form.Label className={style.addCommentLabel} column='lg' lg={1.5}>
                        Add Comment
                    </Form.Label>
                    <Col className={style.addCommentForm}>
                        <Form.Control size="lg" type="text" placeholder="Large text" name='comments' value={comment} onChange={changeHandler} />
                    </Col>

                </Row>
                <Button type='submit' className={style.addBtn} variant="primary">Add</Button>{' '}
            </Form>
        </div>
    )
}