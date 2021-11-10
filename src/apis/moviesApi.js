import axios from "axios";
const API = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=d1bbcca95aed0d94460fae514cdf6bc3';
const LANGUAGE = '&language=en-US';

export async function fetchMoviesApi(page) {
    const { data } = await axios.get(`${API}/discover/movie${API_KEY}${LANGUAGE}&page=${page}`);
    return data
}

export async function fetchSelectedMovieApi(id) {
    const { data } = await axios.get(`${API}/movie/${id}${API_KEY}${LANGUAGE}`)
    return data
}

export async function fetchFavoriteMovieSApi(sessionId, acountId, page) {
    const { data } = await axios.get(`${API}/account/${acountId}/favorite/movies?session_id=${sessionId}&page=${page}&api_key=d1bbcca95aed0d94460fae514cdf6bc3`)
    return data
}