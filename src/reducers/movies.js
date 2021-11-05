import { moviesActions } from '../actions'

export const initialState = {
    movies: [],
    selectedMovies: null,
}

export function movies(state = initialState, action) {
    switch (action.type) {
        case moviesActions.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: [...action.paylaod]
            }

        case moviesActions.FETCH_SELECTED_MOVIE_SUCCESS:
            return {
                ...state,
                selectedMovies: action.payload
            }
        default:
            return state
    }

}