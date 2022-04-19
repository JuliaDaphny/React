import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import apiFilmes from "../../services/apiFilmes";
import { Link } from 'react-router-dom'

const SeriesEstreladoHoje = () => {

  const [series, setSeries] = useState([])

  useEffect(() => {

    apiFilmes.get('tv/airing_today?language=pt-BR').then(resultado => {
      setSeries(resultado.data.results)
    })

  }, [])

  console.log(series)

  return (
    <div>

      <h1 className="text-sm-center m-5">Séries que estão no ar hoje!</h1>

      <Container>
        <Row>
          {series.map(item => (
            <Col md={4} className="mb-4" key={item.id}>
              <Card>
                <Card.Img variant="top" src={item.poster_path ? 'https://image.tmdb.org/t/p/w500' + item.poster_path: 'https://cdn2.iconfinder.com/data/icons/line-files-type/129/Movie_File-512.png'} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Data de lançamento: {item.first_air_date}</Card.Text>
                  <Link className="btn btn-danger" to={"/series/" + item.id}>
                    Ver detalhes
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
};

export default SeriesEstreladoHoje;