import { fetchMoviesSuccess, fetchSelectedMovieSuccess } from '../actions';
import { fetchMoviesApi, fetchSelectedMovieApi } from '../../apis'

export const fetchMovies = (page) => {
    return async (dispatch) => {
        try {
            const movies = await Promise.resolve(fetchMoviesApi(page))
            dispatch(fetchMoviesSuccess(movies))
        } catch (e) {
            console.error(e)
        }
    }
}

export const fetchSelectedMovie = (id) => {
    return async (dispatch) => {
        try {
            const selectedMovie = await Promise.resolve(fetchSelectedMovieApi(id))
            dispatch(fetchSelectedMovieSuccess(selectedMovie))
        } catch (e) {
            console.error(e)
        }
    }
}