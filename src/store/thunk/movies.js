import { fetchMoviesSuccess, fetchSelectedMovieSuccess, fetchFavoriteMoviesSuccess, fetchFoundMoviesSeccess } from '../actions';
import { fetchMoviesApi, fetchSelectedMovieApi, fetchFavoriteMovieSApi, fetchSearchApi } from '../../apis'

export const fetchMovies = (page) => {
    return async (dispatch) => {
        try {
            const movies = await fetchMoviesApi(page)
            dispatch(fetchMoviesSuccess(movies))
        } catch (e) {
            console.error(e)
        }
    }
}

export const fetchSelectedMovie = (id) => {
    return async (dispatch) => {
        try {
            const selectedMovie = await fetchSelectedMovieApi(id)
            dispatch(fetchSelectedMovieSuccess(selectedMovie))
        } catch (e) {
            console.error(e)
        }
    }
}

export const fetchFavoriteMoives = (sessionId, accountId, page) => {
    return async (dispatch) => {
        try {
            const favoiteMovies = await fetchFavoriteMovieSApi(sessionId, accountId, page)
            dispatch(fetchFavoriteMoviesSuccess(favoiteMovies))

        } catch (e) {
            console.error(e)
        }
    }
}

export const fetchFoundMovies = (searchValue, page) => {
    return async (dispatch) => {
        try {
            const foundMovies = await fetchSearchApi(searchValue, page)
            dispatch(fetchFoundMoviesSeccess(foundMovies))
        } catch (e) {
            console.error(e)
        }
    }
}

