import React from 'react';
import { useGameStore } from '../../context';
import { initialState } from '../../reducer';


export default function NextStepPlayer() {
    const [{ firstPlayer, nextPlayer }] = useGameStore();
    // console.log(firstPlayer)
    // console.log(nextPlayer)
    // console.log(initialState)
    return (

        <div>
            {/* {nextPlayer ? `Следующий игрок : ${nextPlayer.name} ${nextPlayer.value}` : `Следующий игрок : ${firstPlayer.name} : ${firstPlayer.value}`} */}
            {/* {nextPlayer ? `${nextPlayer.value}` : `Следующий игрок : false`} */}
            {/* {nextPlayer} */}
            {Object.keys(nextPlayer).length !== 0 ? `Следующий игрок : ${nextPlayer.name} : ${nextPlayer.value}` : `Следующий игрок : ${firstPlayer.name} : ${firstPlayer.value}`}
        </div>
    )
}
