import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = () => {

    const params = useParams()

    const [filme, setFilmes] = useState({})

    useEffect(() => {

            apiFilmes.get('movie/popular?language=pt-BR').then(resultado => {
                setFilmes(resultado.data)
            })
    
        }, [])

    return (
        <div>
            <h1>{filme.title}</h1>
            <row>
                <col></col>
            </row>
        </div>
    )
};

export default FilmesDetalhes;
