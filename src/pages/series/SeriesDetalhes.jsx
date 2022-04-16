import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import apiFilmes from '../../services/apiFilmes'

const SeriesDetalhes = () => {

    const params = useParams()

    const [series, setSeries] = useState({})
    const [atores, setAtores] = useState([])
    const [season, setSeason] = useState([])

    useEffect(() => {

        apiFilmes.get(`tv/${params.id}?language=pt-BR`).then(resultado => {
            setSeries(resultado.data)
            setSeason(resultado.data.seasons)
        })

        apiFilmes.get(`tv/${params.id}/credits?language=pt-BR`).then(resultado => {
            setAtores(resultado.data.cast)
        })

    }, [params.id])

    console.log(series)
    console.log(atores)
    console.log(season)

    var dataLancamento = 'Sem data confirmada.'
    if (typeof series.first_air_date != "undefined") {
        dataLancamento = series.first_air_date.split('-').reverse().join('/')
    }

    return (
        <div>

            {!series.id && <h1>Carregando... Aguarde</h1>}

            {series.id &&

                <div>
                    <Container>
                        <Row>
                            <Col xs={5}>
                                <Card.Img variant="top" src={series.poster_path ? 'https://image.tmdb.org/t/p/w500' + series.poster_path : 'https://cdn2.iconfinder.com/data/icons/line-files-type/129/Movie_File-512.png'} />
                            </Col>
                            <Col xs={7}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title className="mb-4">{series.name}</Card.Title>
                                        <Card.Text>
                                            {series.overview}
                                        </Card.Text>

                                        <p><strong> Gêneros: </strong>
                                            {series.genres.map(item => (
                                                <span>{item.name}, </span>
                                            ))}
                                        </p>

                                        <Card.Text className="blockquote mb-0"></Card.Text>
                                        <Card.Footer className="text-muted">Data de lançamento: {dataLancamento}</Card.Footer>
                                        <Card.Footer className="text-muted">Popularidade do filme: {series.popularity}</Card.Footer>
                                        <Card.Footer className="text-muted">Idioma original: {series.origin_country}</Card.Footer>
                                        <Link className="btn btn-danger btn-lg btn-sm mt-3 m-1" to={-1}>Voltar</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <h1 className="m-5"> Confira as temporadas: </h1>

                            {season.map(item => (

                                <Col className="mb-3" md={2} key={item.id}>
                                    <Card>
                                        <Card.Img variant="top" src={item.poster_path ? 'https://image.tmdb.org/t/p/w500' + item.poster_path : 'https://cdn2.iconfinder.com/data/icons/line-files-type/129/Movie_File-512.png'} />
                                        <Card.Text className="m-sm-2">{item.name}</Card.Text>
                                        <Card.Text className="m-sm-2">{item.air_date}</Card.Text>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <h1 className="m-5"> Confira os atores da série: </h1>

                            {atores.map(item => (

                                <Col className="mb-3" md={2} key={item.id}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Img variant="top" src={item.profile_path ? 'https://image.tmdb.org/t/p/w500' + item.profile_path : 'https://cdn.onlinewebfonts.com/svg/img_303551.png'} />
                                            <Card.Text className="m-sm-2">{item.name}</Card.Text>
                                            <Link className="btn btn-dark btn-lg btn-sm mt-3 m-1" to={'/atores/' + item.id}>Mais detalhes</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            }
        </div>
    )
};

export default SeriesDetalhes;