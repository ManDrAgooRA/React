import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { movies } from './movies'

export const rootReducer = combineReducers({
    user: userReducer,
    movies
})