import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import style from './Details.module.css';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const AddComment = () => {
    const onLoginSubmit = (data) => {
        console.log(data);
    }

    const { values, changeHandler, onSubmit } = useForm({
        comments: ''
    }, onLoginSubmit)
    return (
        <div className={style.addComment}>
            <Form onSubmit={onSubmit}>
                <Row>

                    <Form.Label className={style.addCommentLabel} column='lg' lg={1.5}>
                        Add Comment
                    </Form.Label>
                    <Col className={style.addCommentForm}>
                        <Form.Control size="lg" type="text" placeholder="Large text" name='comments' value={values.comments} onChange={changeHandler} />
                    </Col>

                </Row>
                <Button type='submit' className={style.addBtn} variant="primary">Primary</Button>{' '}
            </Form>
        </div>
    )
}