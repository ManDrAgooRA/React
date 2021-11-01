import { usersActions } from "../actions";
import { getId } from '../utils'

export const initialState = {
    usersData: [],
    filtredUsers: [],
    isOpenModal: false,
    registerData: {
        firstName: 'firstName',
        secondName: 'secondName',
        competition: null,
        id: getId(),
    },
    isDisabled: {
        save: true,
        cancel: false,
        start: false,
        stop: true,
        reset: true,
    },
    winner: {},
    contests: [],
    filtredContests: []
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

        case usersActions.FIND_CONTESTS:
            if (action.payload) {
                return {
                    ...state,
                    filtredContests: state.contests.filter((user) => {
                        return user.name.toLowerCase().includes(action.payload.toLowerCase())
                    })
                }
            } else {
                return {
                    ...state,
                    filtredContests: state.contests
                }
            }

        case usersActions.OPEN_CLOSE_MODAL:
            return {
                ...state,
                isOpenModal: action.payload
            }

        case usersActions.SET_REGISTER_DATA:
            return {
                ...state,
                registerData: {
                    ...state.registerData,
                    ...action.payload
                }
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

        case usersActions.CREATE_CONTENTS:
            return {
                ...state,
                contests: [...state.contests, { ...action.payload, status: 'acitve' }],
                filtredContests: [...state.filtredContests, { ...action.payload, status: 'acitve' }],
            }

        case usersActions.SET_COMPATITION_WINNER:
            return {
                ...state,
                contests: state.contests.map((item) => {
                    if (item.name === action.payload.competition) {
                        return {
                            ...item,
                            status: 'finished',
                            winner: action.payload,
                        }
                    }
                    return item
                }),
                filtredContests: state.filtredContests.map((item) => {
                    if (item.name === action.payload.competition) {
                        return {
                            ...item,
                            status: 'finished',
                            winner: action.payload,
                        }
                    }
                    return item
                }),

            }
        default:
            return state;
    }
}