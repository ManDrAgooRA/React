import { fetchMoviesApi, fetchSelectedMovieApi } from '../../apis/moviesApi'

export const moviesActions = {
    FETCH_MOVIES: '[MOVIES] Fetch movies',
    FETCH_MOVIES_SUCCESS: '[MOVIES] Fetch movies success',
    FETCH_SELECTED_MOVIE: '[MOVIES] Fetch selected movie',
    FETCH_SELECTED_MOVIE_SUCCESS: '[MOVIES] Fetch selected film movie',
    SET_CURRENT_PAGE: '[MOVIE] set current step'
}


export const fetchMovies = (page) => {
    return async (dispatch) => {
        const movies = await Promise.resolve(fetchMoviesApi(page))
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
        dispatch(fetchSelectedMovieSuccess(selectedMovie))
    }
}

export const fetchSelectedMovieSuccess = (selectedMovie) => ({
    type: moviesActions.FETCH_SELECTED_MOVIE_SUCCESS,
    payload: selectedMovie,
})

export const setCurrentPage = (page) => ({
    type: moviesActions.SET_CURRENT_PAGE,
    payload: page
})
