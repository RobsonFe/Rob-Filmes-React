/* eslint-disable no-unused-vars */


import axios from 'axios';

//URL da API 
// https://api.themoviedb.org/3/movie/550?api_key=93629a22ae6dc4e8777ba4142f0f5930&language=pt-br
//Base da API 
//https://api.themoviedb.org/3

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;