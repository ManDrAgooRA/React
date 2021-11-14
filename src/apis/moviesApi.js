import axios from "axios";
const API = 'https://api.themoviedb.org/3';
const LANGUAGE = '&language=en-US';

export const movieAxios = axios.create({
    baseURL: API,
    params: {
        api_key: 'd1bbcca95aed0d94460fae514cdf6bc3',
    }
})

// export async function fetchMoviesApi(page) {
//     const { data } = await movieAxios.get(`/discover/movie?${LANGUAGE}&page=${page}`);
//     return data
// }

export async function fetchSelectedMovieApi(id) {
    const { data } = await movieAxios.get(`/movie/${id}?${LANGUAGE}`)
    return data
}

export async function fetchFavoriteMovieSApi(sessionId, acountId, page) {
    const { data } = await movieAxios.get(`/account/${acountId}/favorite/movies?session_id=${sessionId}&page=${page}`)
    return data
}

export async function fetchAddToFavoriteApi(accountId, sessionId, movieId) {
    return await movieAxios.post(`/account/${accountId}/favorite?session_id=${sessionId}`, {
        media_type: 'movie',
        media_id: movieId,
        favorite: true
    })
}

export async function fetchSearchApi(seacrchQuery, page) {
    const { data } = await movieAxios.get(`/search/movie?query=${seacrchQuery}&page=${page}`)
    return data
}

export async function fetchGenreListApi() {
    const { data } = await movieAxios.get('/genre/movie/list?')
    return data
}

export async function fetchLangaugesListApi() {
    const { data } = await movieAxios.get('/configuration/languages?')
    console.log(data)
    return data
}

export async function fetchFilterByGenerApi(genersString, sortByValue, language, page) {
    const { data } = await movieAxios.get(`/discover/movie`, {
        params: {
            with_genres: genersString,
            sort_by: sortByValue,
            // with_original_language: language,
            page
        }
    })

    return data
}