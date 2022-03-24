import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const Cartao = (props) => {

    conlose.log(props)

    return (
        <div>

            <Container>
                <Card border='black' style={{ width: '18rem' }} className="mb-3">
                    <Card.Img variant="top" src="https://2.bp.blogspot.com/-8OWMy_EU8F4/VCgSvFbgc0I/AAAAAAAAcgo/4H84TjeJ82w/s1600/banners%2Bgrandes%2B(21).jpg" />
                    <Card.Body>
                        <Card.Title>Cardizinho</Card.Title>
                        <Card.Text>
                            Some quick example...
                        </Card.Text>
                        <Button variant="primary">Entrar</Button>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}

export default Cartao