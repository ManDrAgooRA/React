export const ADD_TO_HISTORY = 'add to history';
export const CHANGE_HISTORY = 'change history'
export const SHOW_NEXT_PLAYER = 'show next player';
export const SET_WINNER = 'set winner';
export const NEW_GAME = 'new games';
export const IS_DISABLED_CHANGE_PLAYER_BUTTON = 'is disabled change player button';
export const SET_FIRST_PLAYER = 'set first players';
export const ADD_TO_WINNERS_HISTORY = 'add to winners history';
export const SET_FIRST_PLAYER_NAME = 'first name player';
export const SET_SECOND_PLAYER_NAME = 'second name player';
export const CHANGE_STEP = 'change current step';
export const CHANGE_GIVE_UP = 'change give up disabled'

export const addToHistory = (squares) => ({
    type: ADD_TO_HISTORY,
    payload: { squares },
})

export const changeHistory = (history) => ({
    type: CHANGE_HISTORY,
    payload: history,
})

export const showNextPlayer = (player) => ({
    type: SHOW_NEXT_PLAYER,
    payload: player,
})

export const setWinner = (winner) => ({
    type: SET_WINNER,
    payload: winner,
})

export const newGames = (history) => ({
    type: NEW_GAME,
    payload: history,
})

export const changeDisabledChangePlayer = (newGameStatus) => ({
    type: IS_DISABLED_CHANGE_PLAYER_BUTTON,
    payload: newGameStatus,
})

export const changeDisabledGiveUp = (giveUpStatus) => ({
    type: CHANGE_GIVE_UP,
    payload: giveUpStatus,
})

export const changeFirstPlayer = (person) => ({
    type: SET_FIRST_PLAYER,
    payload: person,
})

export const addToWinnersHistory = (winnersList) => ({
    type: ADD_TO_WINNERS_HISTORY,
    payload: winnersList,
})

export const setFirstNamePlayer = (name) => ({
    type: SET_FIRST_PLAYER_NAME,
    payload: name,
})

export const setSecondNamePlayer = (name) => ({
    type: SET_SECOND_PLAYER_NAME,
    payload: name,
})

export const setAnotherStep = (step) => ({
    type: CHANGE_STEP,
    payload: step,
})