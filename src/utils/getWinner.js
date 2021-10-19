export function getWinner(dispatch, func, arr) {
    if (arr) {
        return (
            dispatch(func(arr))
        )
    }
}