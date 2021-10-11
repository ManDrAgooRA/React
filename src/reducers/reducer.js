export default function reducer(state, action) {
    switch (action.type) {

        case 'setName':
            return {
                ...state,
                name: action.payload,
            };
        case 'setLastName':
            return {
                ...state,
                lastName: action.payload
            };
        case 'setEmail':
            return {
                ...state,
                email: action.payload
            }
        case 'setCity':
            return {
                ...state,
                city: action.payload
            }

        case 'setStreet':
            return {
                ...state,
                street: action.payload
            }
        case 'setHome':
            return {
                ...state,
                home: action.payload
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

        case 'setImage':
            return {
                ...state,
                image: action.payload
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
