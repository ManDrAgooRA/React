import { gameParams } from '../constants/gameParams';
import { ADD_TO_HISTORY, CHANGE_HISTORY, SHOW_NEXT_PLAYER, SET_WINNER, NEW_GAME, IS_DISABLED_CHANGE_PLAYER_BUTTON, ADD_TO_WINNERS_HISTORY, SET_FIRST_PLAYER_NAME, SET_SECOND_PLAYER_NAME, CHANGE_STEP, CHANGE_GIVE_UP, SET_FIRST_PLAYER } from '../actions';

export const initialState = {
    isXTurn: true,
    firstPlayer: { id: 1, name: 'player1', value: 'x' },
    secondPlayer: { id: 2, name: 'player2', value: 'o' },
    nextPlayer: {},
    winner: '',
    isDisabledButton: false,
    isDisabledGiveUp: true,
    step: 0,
    history: [
        {
            squares: new Array(Math.pow(gameParams.size, 2)).fill(null),
        }
    ],
    winnersHistory: [],
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload],
            };

        case CHANGE_HISTORY:
            return {
                ...state,
                history: [
                    action.payload,
                ],
            }

        case SHOW_NEXT_PLAYER:
            return {
                ...state,
                nextPlayer: action.payload
            }

        case SET_WINNER:
            return {
                ...state,
                winner: action.payload
            }

        case NEW_GAME:
            return {
                ...state,
                history: [
                    {
                        squares: action.payload,
                    }
                ],
                nextPlayer: '',
                winner: '',
            };

        case IS_DISABLED_CHANGE_PLAYER_BUTTON:
            return {
                ...state,
                isDisabledButton: action.payload,
            }

        case CHANGE_GIVE_UP:
            return {
                ...state,
                isDisabledGiveUp: action.payload,
            }

        case SET_FIRST_PLAYER:
            return {
                ...state,
                firstPlayer: action.payload
            }

        case CHANGE_STEP:
            return {
                ...state,
                step: action.payload
            }

        case ADD_TO_WINNERS_HISTORY:
            return {
                ...state,
                winnersHistory: [...state.winnersHistory, action.payload],
            }

        case SET_FIRST_PLAYER_NAME:
            return {
                ...state,
                firstPlayer: { ...state.firstPlayer, name: action.payload }
            }

        case SET_SECOND_PLAYER_NAME:
            return {
                ...state,
                secondPlayer: { ...state.secondPlayer, name: action.payload }
            }

        default:
            return state;
    }
};
