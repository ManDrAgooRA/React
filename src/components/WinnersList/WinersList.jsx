import React from 'react';
import { useGameStore } from '../../context';
import { v4 as uuidv4 } from 'uuid';

export default function WinersList() {
    const [{ winnersHistory }] = useGameStore();

    return (
        <div>
            <p><strong> Winners List : </strong></p>
            {winnersHistory.map((item, i) => {
                return <p key={uuidv4()}>{item.name}:{item.value} - {item.winTime}</p>
            })}
        </div>
    )
}
