import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import style from './Catalog.module.css';

export const CatalogItem = ({
    imageUrl,
    titile,
    location,
    _id
}) => {
  const [likes, setLike] = useState('')
  const onLikeClick = () => {
    setLike(state => Number(state) + 1)
  }
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
            <Button onClick={onLikeClick} className={style.btnLike} as={Link} to={`#`}  variant="primary" >
              Like: {likes}
            </Button>
            </div>
          </Card>
        </Col>
    )
}