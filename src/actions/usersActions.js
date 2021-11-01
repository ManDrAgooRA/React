export const usersActions = {
    ADD_USER: '[USERS] Add User',
    FIND_USER: '[USERS] Find User',
    FIND_CONTESTS: '[USERS] find contests',
    OPEN_CLOSE_MODAL: '[USERS] Open and Close modal',
    SET_REGISTER_DATA: '[USERS] set rigester data',
    SET_DISABLED_BUTTONS: '[USERS] change timers btns',
    CHANGE_TIME: '[USERS] change time',
    DELETE_USER: '[USERS] delete user',
    CREATE_CONTENTS: '[USERS] create new contents',
    SET_ID_CONTENTS: '[USERS] set id contents',
    ADD_TO_PARTICIPANTS: '[USERS] add to participants',
    SET_COMPATITION_WINNER: '[USER] SET COMPATITION WINNER',
}

export const addUser = (user) => ({
    type: usersActions.ADD_USER,
    payload: user,
})

export const findUser = (searchValue) => ({
    type: usersActions.FIND_USER,
    payload: searchValue,
})

export const findContests = (searchValue) => ({
    type: usersActions.FIND_CONTESTS,
    payload: searchValue,
})

export const changeModalState = (state) => ({
    type: usersActions.OPEN_CLOSE_MODAL,
    payload: state,
})

export const setRegisterData = (data) => ({
    type: usersActions.SET_REGISTER_DATA,
    payload: data
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

export const createContents = (contents) => ({
    type: usersActions.CREATE_CONTENTS,
    payload: contents
})

export const setIdContents = (id) => ({
    type: usersActions.SET_ID_CONTENTS,
    payload: id
})

export const addToParticipants = (userId) => ({
    type: usersActions.ADD_TO_PARTICIPANTS,
    payload: userId
})

export const setCurrentWinner = (winner) => ({
    type: usersActions.SET_COMPATITION_WINNER,
    payload: winner
})

