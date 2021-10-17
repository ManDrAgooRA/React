import { changeDisabledGameButton } from "../actions"

export function getWinner(dispatch, func, arr) {
    if (arr) {
        return (
            dispatch(func(arr)),
            dispatch(changeDisabledGameButton(false))
        )
    }
}