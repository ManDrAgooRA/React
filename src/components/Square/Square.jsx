import React from 'react';
import './Square.scss';
import { useGameStore } from '../../context';

export default function Square({ value, onClick }) {
    const [{ winner }] = useGameStore()
    const classes = ['btn'];

    if (value) {
        classes.push('disabled');
    }

    return (
        <button
            className={classes.join(' ')}
            onClick={onClick}
            disabled={value || winner}
        >
            {value}
        </button>
    );
}