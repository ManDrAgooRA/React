import React from 'react'

function TimerList({ times, uuidv4 }) {
    return (
        <div className="history">
            {times.map(item => {
                return <div key={uuidv4()}>{item.h}:{item.m}:{item.s}:{item.ms}</div>
            })}
        </div>
    )
}

export default TimerList
