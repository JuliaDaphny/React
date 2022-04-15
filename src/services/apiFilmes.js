import axios from "axios";

//Json
const parametroApiList = {
    baseURL: process.env.REACT_APP_URL_FILMES,
    headers: {
        'Content-type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY_FILMES,
    }
}

const apiFilmes = axios.create(parametroApiList)

export default apiFilmes;