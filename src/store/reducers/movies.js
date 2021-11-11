import { moviesActions } from '../actions'

export const initialState = {
    movies: [],
    currentPage: 1,
    totalPages: 1,
    selectedMovies: null,
    isLoading: true,
    isLoadingCurrentMovie: true,
}

export function movies(state = initialState, action) {
    switch (action.type) {
        case moviesActions.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: [...action.paylaod.results],
                totalPages: action.paylaod.total_pages,
                isLoading: false
            }

        case moviesActions.FETCH_SELECTED_MOVIE_SUCCESS:
            return {
                ...state,
                selectedMovies: action.payload,
                isLoadingCurrentMovie: false
            }

        case moviesActions.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        case moviesActions.CLEAR_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovies: null,
                isLoadingCurrentMovie: true
            }

        case moviesActions.FETCH_FOUND_MOVIE_SUCCESS:
            return {
                ...state,
                movies: [...action.payload.results],
                totalPages: action.payload.total_pages,
            }

        default:
            return state
    }

}