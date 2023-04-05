import Card from 'react-bootstrap/Card';

import style from './Details.module.css';

export const CardDetails = ({
    titile,
    location,
    description
}) => {
    return (
        <Card.Body className={style.body}>
            <Card.Title>Titile: {titile}</Card.Title>
            <Card.Text>Location: {location}</Card.Text>
            <Card.Text>
                Description: {description}
            </Card.Text>
        </Card.Body>
    )
}