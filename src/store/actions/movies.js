export const moviesActions = {
    FETCH_MOVIES_SUCCESS: '[MOVIES] Fetch movies success',
    FETCH_SELECTED_MOVIE_SUCCESS: '[MOVIES] Fetch selected  movie',
    FETCH_FOUND_MOVIE_SUCCESS: '[MOVIE] Fectch found moives',
    FETCH_GENRES_SUCCESS: '[MOVIE] Fetch genres success',
    FETCH_FILTER_BY_GENER_SUCCESS: '[MOVIE] Fetch filter by success',
    SET_CURRENT_PAGE: '[MOVIE] Set current step',
    CLEAR_SELECTED_MOVIE: '[MOVIE] Clear seleced movie',
}

export const fetchMoviesSuccess = (movies) => ({
    type: moviesActions.FETCH_MOVIES_SUCCESS,
    paylaod: movies
})

export const fetchSelectedMovieSuccess = (selectedMovie) => ({
    type: moviesActions.FETCH_SELECTED_MOVIE_SUCCESS,
    payload: selectedMovie,
})

export const setCurrentPage = (page) => ({
    type: moviesActions.SET_CURRENT_PAGE,
    payload: page
})

export const clearSeletedMovie = () => ({
    type: moviesActions.CLEAR_SELECTED_MOVIE
})

export const fetchFoundMoviesSeccess = (foundMoives) => ({
    type: moviesActions.FETCH_FOUND_MOVIE_SUCCESS,
    payload: foundMoives
})

export const fetchGenreSuccess = (genreList) => ({
    type: moviesActions.FETCH_GENRES_SUCCESS,
    payload: genreList
})

export const fetchFilterBuyGenerSuccess = (sortedMovies) => ({
    type: moviesActions.FETCH_FILTER_BY_GENER_SUCCESS,
    payload: sortedMovies
})