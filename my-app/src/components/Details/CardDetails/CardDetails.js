import Card from 'react-bootstrap/Card';
import style from './CardDetails.module.css';

export const CardDetails = ({
    titile,
    location,
    description
}) => {
    return (
        <Card.Body className={style.body}>
            <Card.Title><span>Titile:</span> {titile}</Card.Title>
            <Card.Text><span>Location:</span> {location}</Card.Text>
            <Card.Text>
                <span>Description:</span> {description}
            </Card.Text>
        </Card.Body>
    )
}