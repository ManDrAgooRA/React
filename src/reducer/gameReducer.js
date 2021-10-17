import { gameParams } from '../constants/gameParams';
// import { ADD_TO_HISTORY, SHOW_NEXT_PLAYER, SET_WINNER, NEW_GAME, IS_DISABLED_NEW_GAME_BUTTON, SET_FIRST_PLAYER } from '../actions';
import { ADD_TO_HISTORY, SHOW_NEXT_PLAYER, SET_WINNER, NEW_GAME, IS_DISABLED_NEW_GAME_BUTTON } from '../actions';

export const initialState = {
    isXTurn: true,
    firstPlayer: { name: 'playervas', value: 'x' },
    secondPlayer: { name: 'player2', value: 'o' },
    nextPlayer: {},
    winner: '',
    isDisabledNewGameButton: true,
    step: 1,
    history: [
        {
            squares: new Array(Math.pow(gameParams.size, 2)).fill(null),
        }
    ],
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
                // nextPlayer: '',
                winner: '',
            };

        case IS_DISABLED_NEW_GAME_BUTTON:
            return {
                ...state,
                isDisabledNewGameButton: action.payload,
            }

        case 'fisrtPlayers':
            console.log(action.payload)
            return {
                ...state,
                firstPlayer: action.payload
            }

        default:
            return state;
    }
};
