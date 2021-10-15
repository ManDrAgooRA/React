import React from 'react';
import { useGameStore } from '../../context';


export default function NextStepPlayer() {
    const [{ firstPlayer, nextPlayer }] = useGameStore();

    return (

        <div>
            {nextPlayer ? `Следующий игрок : ${nextPlayer}` : `Следующий игрок : ${firstPlayer.name} : ${firstPlayer.value}`}
        </div>
    )
}
