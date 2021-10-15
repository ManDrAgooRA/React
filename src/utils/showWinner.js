export default function showWinner(dispatch, func, player) {


    return dispatch(func(`${player.name} : ${player.value}`))

}
