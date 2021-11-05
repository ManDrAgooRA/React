import { fetchMoviesApi, fetchSelectedMovieApi } from '../apis/moviesApi'

export const moviesActions = {
    FETCH_MOVIES: '[MOVIES] Fetch movies',
    FETCH_MOVIES_SUCCESS: '[MOVIES] Fetch movies success',
    FETCH_SELECTED_MOVIE: '[MOVIES] Fetch selected movie',
    FETCH_SELECTED_MOVIE_SUCCESS: '[MOVIES] Fetch selected film movie',
}


export const fetchMovies = () => {
    return async (dispatch) => {
        const movies = await Promise.resolve(fetchMoviesApi())
        dispatch(fetchMoviesSuccess(movies))
    }
}

export const fetchMoviesSuccess = (movies) => ({
    type: moviesActions.FETCH_MOVIES_SUCCESS,
    paylaod: movies
})


export const fetchSelectedMovie = (id) => {
    return async (dispatch) => {
        const selectedMovie = await Promise.resolve(fetchSelectedMovieApi(id))
        // console.log(selectedMovie)
        dispatch(fetchSelectedMovieSuccess(selectedMovie))
    }
}

export const fetchSelectedMovieSuccess = (selectedMovie) => ({
    type: moviesActions.FETCH_SELECTED_MOVIE_SUCCESS,
    payload: selectedMovie,
})


