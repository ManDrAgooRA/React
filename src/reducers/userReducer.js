import { userActions } from '../actions'
export const initialState = {
    currentUser: {},
    isLoggedIn: false,
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case userActions.LOG_IN:
            return {
                ...state,
                currentUser: { ...action.payload },
                isLoggedIn: true
            }

        default:
            return state
    }
}