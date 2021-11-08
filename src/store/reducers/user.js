import { usersActions } from './../actions/user';

const initialState = {
    user: {},
}
export function user(state = initialState, action) {
    switch (action.type) {

        case usersActions.FETCH_USER_SUCCESS: {
            return {
                ...state,
                user: { ...action.payload.user }
            }
        }
        default: return state

    }
}