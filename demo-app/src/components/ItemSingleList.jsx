import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function ItemSingleList(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imageUrl} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <div>
                        <p>{props.price}</p>
                        <p>{props.brand}</p>
                        <p>{props.category}</p>
                    </div>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
