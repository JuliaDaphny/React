import axios from "axios";
import token from "./token";

//Json
const parametroApiList = {
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token,
    }
}

const apiFilmes = axios.create(parametroApiList)

export default apiFilmes;