import axios from 'axios';

const BASE_URL = 'https://swapi.co/api/';
/* eslint-disable-next-line */
export const allFilms = () => axios.get(`${BASE_URL}films`);
export const getFilmByID = id => axios.get(`${BASE_URL}films/${id}`);
export const searchFilms = title =>
  axios.get(`${BASE_URL}films/?search=${title}`);
export const planetsForFilm = url => axios.get(url);
