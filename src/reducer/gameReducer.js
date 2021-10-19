import { gameParams } from '../constants/gameParams';
// import { ADD_TO_HISTORY, SHOW_NEXT_PLAYER, SET_WINNER, NEW_GAME, IS_DISABLED_NEW_GAME_BUTTON, SET_FIRST_PLAYER } from '../actions';
import { ADD_TO_HISTORY, SHOW_NEXT_PLAYER, SET_WINNER, NEW_GAME, IS_DISABLED_CHANGE_PLAYER_BUTTON, ADD_TO_WINNERS_HISTORY } from '../actions';

export const initialState = {
    isXTurn: true,
    firstPlayer: { id: 1, name: 'playervas', value: 'x' },
    secondPlayer: { id: 2, name: 'player2', value: 'o' },
    nextPlayer: {},
    winner: '',
    isDisabledChangePlayerButton: false,
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
                isDisabledChangePlayerButton: action.payload,
            }

        case 'fisrtPlayers':
            return {
                ...state,
                firstPlayer: action.payload
            }

        case 'secondPlayers':
            return {
                ...state,
                secondPlayer: action.payload
            }

        case 'changeStep':
            return {
                ...state,
                step: action.payload
            }

        case ADD_TO_WINNERS_HISTORY:
            console.log(action.payload)
            return {
                ...state,
                winnersHistory: [...state.winnersHistory, action.payload],
            }

        default:
            return state;
    }
};
