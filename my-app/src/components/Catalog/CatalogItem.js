import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import style from './Catalog.module.css'
import { Link } from 'react-router-dom';

export const CatalogItem = ({
    imageUrl,
    titile,
    description,
    _id
}) => {
    return (
        <Col>
          <Card className={style.col}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>{titile}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Button as={Link} to={`/details/${_id}`} variant="primary" size="lg">
              Primary button
            </Button>
          </Card>
        </Col>
    )
}