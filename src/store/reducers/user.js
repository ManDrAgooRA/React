import { userActions } from "../actions"
export const initialState = {
    isLoggedIn: true,
}

export function user(state = initialState, action) {
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