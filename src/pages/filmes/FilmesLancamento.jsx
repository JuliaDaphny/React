import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import apiFilmes from "../../services/apiFilmes";
import { Link } from 'react-router-dom'

const FilmesLancamento = () => {

    const [filme, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get(`movie/latest?language=pt-BR`).then(resultado => {
            setFilmes(resultado.data.results)
        })

    }, [])

    console.log(filme)

    return (
        <div>

            <h1>Filmes em lançamento</h1>

            <Container>
                <Row>
                    <Col md={4} className="mb-4" key={filme.id}>
                        <Card>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path} />
                            <Card.Body>
                                <Card.Title>{filme.title}</Card.Title>
                                <Card.Text>Data de estreia: {filme.release_date}</Card.Text>
                                <Card.Text>{filme.original_name}</Card.Text>
                                <Link className="btn btn-danger" to={"/filmes/" + filme.id}>
                                    Ver detalhes
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FilmesLancamento;