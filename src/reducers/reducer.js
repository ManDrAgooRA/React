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
        case 'increament':
            // console.log({ step})
            return {
                ...state,
                step: state.step + 1
            }

        case 'decreament':
            console.log({ state })
            return {
                ...state,
                step: state.step - 1
            }

        default:
            return state;
    }
}
