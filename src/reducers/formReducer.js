import { usersActions } from '../actions'

export const initialState = {

    firstName: null,
    lastName: null,
    dateOfBirth: null,
    sex: null,
    email: null,
    userName: null,
    isRegister: false
}

export function formReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}