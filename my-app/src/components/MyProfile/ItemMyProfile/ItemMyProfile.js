import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import style from './ItemMyProfile.module.css';

export const ItemMyProfil = ({
    imageUrl,
    titile,
    location,
    _id
}) => {
    return (
        <Col>
            <Card>
                <Card.Img className={style.img} variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{titile}</Card.Title>
                    <Card.Text>Location: {location}</Card.Text>
                    <Button className={style.btnDetails} as={Link} to={`/details/${_id}`} variant="success">
                        Details
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}