import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


const HeroCard = ({ cardTitle, cardSubTitle, cardText, buttonText, image }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Container className='d-flex py-2 justify-content-center'>

                <Image src={image} roundedCircle />
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