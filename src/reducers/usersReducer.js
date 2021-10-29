import { usersActions } from "../actions";

export const initialState = {
    usersData: [],
    filtredUsers: [],
    isOpenModal: false,
    firstName: 'firstName',
    secondName: 'secondName',
    isDisabled: {
        save: true,
        cancel: false,
        start: false,
        stop: true,
        reset: true,
    },
    id: '111111',
    winner: {},
    contests: {},
    selectedUser: {}
};


export function usersReducer(state = initialState, action) {
    switch (action.type) {

        case usersActions.ADD_USER:
            return {
                ...state,
                usersData: [...state.usersData, action.payload],
                filtredUsers: [...state.filtredUsers, action.payload],
                winner: {}
            }

        case usersActions.FIND_USER:
            if (action.payload) {
                return {
                    ...state,
                    filtredUsers: state.usersData.filter((user) => {
                        return user.name.toLowerCase().includes(action.payload.toLowerCase()) || user.id.includes(action.payload)
                    })
                }
            } else {
                return {
                    ...state,
                    filtredUsers: state.usersData
                }
            }

        case usersActions.OPEN_CLOSE_MODAL:
            return {
                ...state,
                isOpenModal: action.payload
            }

        case usersActions.SET_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            }

        case usersActions.SET_SECOND_NAME:
            return {
                ...state,
                secondName: action.payload
            }

        case usersActions.SET_USER_ID:
            return {
                ...state,
                id: action.payload
            }

        case usersActions.SET_DISABLED_BUTTONS:
            return {
                ...state,
                isDisabled: {
                    ...state.isDisabled,
                    ...action.payload
                }
            }

        case usersActions.CHANGE_TIME:
            return {
                ...state,
                time: {
                    ...action.payload
                }
            }

        case usersActions.DELETE_USER:
            return {
                ...state,
                filtredUsers: action.payload,
            }

        case usersActions.SHOW_WINNER:
            let min = +state.filtredUsers[0].time.split(':').join('')
            let winnerObj = {}

            for (let i = 0; i < state.filtredUsers.length; i++) {
                if (+state.filtredUsers[i].time.split(':').join('') < min) {
                    min = +state.filtredUsers[i].time.split(':').join('')
                    winnerObj = state.filtredUsers[i]
                }
            }
            return {
                ...state,
                winner: winnerObj
            }

        case usersActions.SELECTED_USER:
            console.log(action.payload)
        // return {
        //     ...state,

        // }


        default:
            return state;
    }
}
