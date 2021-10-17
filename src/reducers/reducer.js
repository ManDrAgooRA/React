import { UPDATE_DATA } from "../actions/actions";

export const dataForm = {
    'name': '',
    'lastName': '',
    'email': '',
    'city': '',
    'street': '',
    'home': '',
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlbOV4YoZ5QCml5IIUXhj10cOdEJR2E-_Wg&usqp=CAU',
    'password': '',
    'secondPassword': '',
    step: 1,
    isDisabledPhoto: true,
    darkTheme: false,
}

export default function reducer(state = dataForm, action) {
    switch (action.type) {
        case UPDATE_DATA:
            return {
                ...state,
                ...action.payload
            }

        case 'increment':
            return {
                ...state,
                step: state.step + 1
            }

        case 'decrement':
            return {
                ...state,
                step: state.step - 1
            }

        case 'setDisabledPhoto':
            return {
                ...state,
                isDisabledPhoto: false
            }

        case 'changeTheme':
            return {
                ...state,
                darkTheme: action.payload
            }

        default:
            return state;
    }
}
