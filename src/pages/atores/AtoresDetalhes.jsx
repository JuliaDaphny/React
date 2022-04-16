import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import apiFilmes from '../../services/apiFilmes';


const AtoresDetalhes = () => {

    const params = useParams()
    const [ator, setAtor] = useState({})
    const [series, setSeries] = useState([])
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiFilmes.get('person/' + params.id + '?language=pt-BR').then(resultado => {
            setAtor(resultado.data)
        })

        apiFilmes.get('person/' + params.id + '/tv_credits?language=pt-BR').then(resultado => {
            setSeries(resultado.data.cast)
        })

        apiFilmes.get('person/' + params.id + '/movie_credits?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.cast)
        })

    }, [params.id])

    console.log(filmes)
    console.log(series)

    return (
        <div>

            {!ator.id && <h1>Carregando... Aguarde</h1>}

            {ator.id &&


                <div>
                    <Container>
                        <Row>
                            <Col xs={5}>
                                <Card.Img variant="top" src={ator.profile_path ? 'https://image.tmdb.org/t/p/w500' + ator.profile_path : 'https://cdn.onlinewebfonts.com/svg/img_303551.png'} />
                            </Col>
                            <Col xs={7}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title className="mb-4">{ator.name}</Card.Title>
                                        <Card.Text>{ator.biography}</Card.Text>
                                        <Card.Text className="blockquote mb-0"></Card.Text>
                                        <Card.Footer className="text-muted">Data de nascimento: {ator.birthday}</Card.Footer>
                                        <Card.Footer className="text-muted">Local de nascimento: {ator.place_of_birth}</Card.Footer>
                                        <Link className="btn btn-danger btn-lg btn-sm mt-3 m-1" to={-1}>Voltar</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <h1 className="m-5"> Filmes que participou: </h1>

                            {filmes.map(item => (

                                <Col className="mb-3" md={2} key={item.id}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Img variant="top" src={item.poster_path ? 'https://image.tmdb.org/t/p/w500' + item.poster_path: 'https://cdn2.iconfinder.com/data/icons/line-files-type/129/Movie_File-512.png'} />
                                            <Card.Text className="m-sm-2">{item.title}</Card.Text>
                                            <Link className="btn btn-dark btn-lg btn-sm mt-3 m-1" to={'/filmes/' + item.id}>Mais detalhes</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <h1 className="m-5"> Séries que participou: </h1>

                            {series.map(item => (

                                <Col className="mb-3" md={2} key={item.id}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Img variant="top" src={item.poster_path ? 'https://image.tmdb.org/t/p/w500' + item.poster_path: 'https://cdn2.iconfinder.com/data/icons/line-files-type/129/Movie_File-512.png'} />
                                            <Card.Text className="m-sm-2">{item.title}</Card.Text>
                                            <Link className="btn btn-dark btn-lg btn-sm mt-3 m-1" to={'/series/' + item.id}>Mais detalhes</Link>
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

export default AtoresDetalhes;