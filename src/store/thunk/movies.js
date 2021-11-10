import { fetchMoviesSuccess, fetchSelectedMovieSuccess, fetchFavoriteMoviesSuccess } from '../actions';
import { fetchMoviesApi, fetchSelectedMovieApi, fetchFavoriteMovieSApi } from '../../apis'

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

export const fetchFavoriteMoives = (sessionId, accountId, page) => {
    return async (dispatch) => {
        try {
            const favoiteMovies = await Promise.resolve(fetchFavoriteMovieSApi(sessionId, accountId, page))
            dispatch(fetchFavoriteMoviesSuccess(favoiteMovies))

        } catch (e) {
            console.error(e)
        }
    }
}

