import { gameParams } from '../constants/gameParams';
import { ADD_TO_HISTORY, SHOW_NEXT_PLAYER, SET_WINNER, NEW_GAME } from '../actions';

export const initialState = {
    isXTurn: true,
    firstPlayer: { name: 'player1', value: 'x' },
    secondPlayer: { name: 'player2', value: 'o' },
    nextPlayer: '',
    winner: '',
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
                nextPlayer: action.payload,
            }

        case SET_WINNER:
            return {
                ...state,
                winner: action.payload
            }

        // case NEW_GAME:
        //     console.log(action.payload)
        // return {
        //     ...state,
        //     history: [
        //         {
        //             squares: action.payload,
        //         }
        //     ],
        // };

        case 'new':
            return {
                ...state,
                history: [
                    {
                        squares: action.payload,
                    }
                ],
            };

        default:
            return state;
    }
};
