import { combineReducers } from 'redux'
import { formReducer } from './formReducer';
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer
})