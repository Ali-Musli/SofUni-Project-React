import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import style from './CatalogItem.module.css';

export const CatalogItem = ({
    imageUrl,
    titile,
    location,
    _id
}) => {
    return (
        <Col>
          <Card className={style.col} border='secondary' bg='light'>
            <Card.Img variant="top" src={imageUrl} className={style.img}/>
            <Card.Body>
              <Card.Title>Titile: {titile}</Card.Title>
              <Card.Text>Location: {location}</Card.Text>
            </Card.Body>
            <div className={null}>
            <Button className={style.btnDetails} as={Link} to={`/details/${_id}`}  variant="success">
              Details
            </Button>
            </div>
          </Card>
        </Col>
    )
}