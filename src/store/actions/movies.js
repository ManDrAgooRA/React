export const moviesActions = {
    FETCH_MOVIES_SUCCESS: '[MOVIES] Fetch movies success',
    FETCH_SELECTED_MOVIE_SUCCESS: '[MOVIES] Fetch selected film movie',
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