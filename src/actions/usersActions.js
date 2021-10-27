export const usersActions = {
    ADD_USER: '[USERS] Add User',
    FIND_USER: '[USERS] Find User',
    OPEN_CLOSE_MODAL: '[USERS] Open and Close modal',
    SET_FIRST_NAME: '[USERS] set first name',
    SET_SECOND_NAME: '[USERS] set second name',
    SET_USER_ID: '[USERS] set user id',
    SET_DISABLED_BUTTONS: '[USERS] change timers btns',
    CHANGE_TIME: '[USERS] change time',
    DELETE_USER: '[USERS] delete user',
    SHOW_WINNER: '[USERS] show winner',
}

export const addUser = (user) => ({
    type: usersActions.ADD_USER,
    payload: user,
})

export const findUser = (searchValue) => ({
    type: usersActions.FIND_USER,
    payload: searchValue,
})

export const changeModalState = (state) => ({
    type: usersActions.OPEN_CLOSE_MODAL,
    payload: state,
})

export const setFirstName = (firstName) => ({
    type: usersActions.SET_FIRST_NAME,
    payload: firstName,
})

export const setUserId = (id) => ({
    type: usersActions.SET_USER_ID,
    payload: id,
})

export const setSecondName = (secondName) => ({
    type: usersActions.SET_SECOND_NAME,
    payload: secondName,
})

export const changeBtnDisabled = (disableds) => ({
    type: usersActions.SET_DISABLED_BUTTONS,
    payload: disableds,
})

export const changeTime = (time) => ({
    type: usersActions.CHANGE_TIME,
    payload: time,
})

export const deleteUser = (user) => ({
    type: usersActions.DELETE_USER,
    payload: user
})

export const showWinner = () => ({
    type: usersActions.SHOW_WINNER,
})