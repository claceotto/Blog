import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const HeroCard = ({ cardTitle, cardSubTitle, cardText, buttonText }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Container className='d-flex py-2 justify-content-center'>

                <Image src="https://i.pravatar.cc/150?img=16" roundedCircle />
            </Container>
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{cardSubTitle}</Card.Subtitle>
                <Card.Text>
                    {cardText}
                </Card.Text>
                <Button variant="primary">{buttonText}</Button>
            </Card.Body>
        </Card>
    );
}

export default HeroCard;