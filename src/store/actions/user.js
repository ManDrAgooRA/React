export const usersActions = {
    FETCH_USER_SUCCESS: '[USER] add user'
}

export const fetchUserSuccess = (user) => ({
    type: usersActions.FETCH_USER_SUCCESS,
    payload: { user }
})