export const ADD_TO_HISTORY = 'add to history';
export const SHOW_NEXT_PLAYER = 'show next player';
export const SET_WINNER = 'set winner';
export const NEW_GAME = 'new game';

export const addToHistory = (squares) => ({
    type: ADD_TO_HISTORY,
    payload: { squares },
})

export const showNextPlayer = (player) => ({
    type: SHOW_NEXT_PLAYER,
    payload: player
})

export const setWinner = (winner) => ({
    type: SET_WINNER,
    payload: winner
})

export const newGame = (history) => ({
    type: NEW_GAME,
    payload: history
})