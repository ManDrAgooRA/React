import { themeActions } from "../actions"

export const initialState = {
    isLightMode: true
}

export function theme(state = initialState, action) {
    switch (action.type) {
        case themeActions.TOGGLE_THEME: {
            console.log('work')
            return {
                ...state,
                isLightMode: !state.isLightMode
            }
        }

        default:
            return state
    }
}
