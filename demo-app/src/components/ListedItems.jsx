import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import ItemSingleList from './ItemSingleList'

export default function ListedItems(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <ItemSingleList {...products}/>
                </Col>
            </Row>
        </Container>
    )
}
