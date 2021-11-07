import { combineReducers } from 'redux'
import { user } from './user'
import { movies } from './movies'

export const rootReducer = combineReducers({
    user,
    movies
})