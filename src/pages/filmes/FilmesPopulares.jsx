import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import apiFilmes from "../../services/apFilmes";


const FilmesPopulares = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{

        apiFilmes.get('movie/popular').then(resultado=>{
            console.log(resultado.data.results)
        })

    }, [])

    return (
        <div>
            <h1>Filmes Populares</h1>
        </div>
    );
};

export default FilmesPopulares;