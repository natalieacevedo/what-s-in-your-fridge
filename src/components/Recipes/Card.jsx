import React from 'react';
import { Card } from 'react-bootstrap';
import RecipePop from './RecipePop';



function Card1() {
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://img.icons8.com/doodle/100/000000/noodles--v1.png" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <RecipePop />
            </Card.Body>
        </Card>
        </>
    )
}

export default Card1
