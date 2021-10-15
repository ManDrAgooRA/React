import React from 'react';
import './Square.scss';

export default function Square({ value, onClick }) {

    const classes = ['btn'];

    if (value) {
        classes.push('disabled');
    }

    return (
        <button
            className={classes.join(' ')}
            onClick={onClick}
            disabled={value}
        >
            {value}
        </button>
    );
}