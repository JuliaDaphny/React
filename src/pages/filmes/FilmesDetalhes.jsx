import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = () => {

    const params = useParams()

    const [filme, setFilmes] = useState({})

    useEffect(() => {

        apiFilmes.get(`movie/${params.id}?language=pt-BR`).then(resultado => {
            setFilmes(resultado.data)
        })

    }, [params.id])

    console.log(filme)

    var dataLancamento = 'Sem data confirmada.'
    if (typeof filme.release_date != "undefined") {
        dataLancamento = filme.release_date.split('-').reverse().join('/')
    }

    return (
        <div>
            
            {!filme.id && <h1>Carregando... Aguarde</h1>}

            {filme.id &&

            <div>

            <Container>
                <Row>
                    <Col xs={5}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path} />
                    </Col>
                    <Col xs={7}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="mb-4">{filme.title}</Card.Title>
                                <Card.Text>
                                    {filme.overview}
                                </Card.Text>

                                <p><strong> Gêneros: </strong>
                                    {filme.genres.map(item => (
                                        <span>{item.name}, </span>
                                    ))}
                                </p>

                                <Card.Text className="blockquote mb-0"></Card.Text>
                                <Card.Footer className="text-muted">Data de lançamento: {dataLancamento}</Card.Footer>
                                <Card.Footer className="text-muted">Popularidade do filme: {filme.popularity}</Card.Footer>
                                <a className="btn btn-dark btn-lg btn-sm mt-3" href={filme.homepage}>Assista o filme e seja feliz!</a>
                                <Link className="btn btn-danger btn-lg btn-sm mt-3 m-1" to={-1}>Voltar</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            </div>
            }
        </div>
    )
};

export default FilmesDetalhes;
