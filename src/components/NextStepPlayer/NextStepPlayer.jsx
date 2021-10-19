import React from 'react';
import { useGameStore } from '../../context';

export default function NextStepPlayer() {
    const [{ firstPlayer, nextPlayer }] = useGameStore();

    return (

        <div>
            {Object.keys(nextPlayer).length !== 0 ? `Следующий игрок : ${nextPlayer.name} : ${nextPlayer.value}` : `Следующий игрок : ${firstPlayer.name} : ${firstPlayer.value}`}
        </div>
    )
}
