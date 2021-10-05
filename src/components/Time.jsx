import React from 'react'

function Time({ time, parseTime }) {
    return (
        <div className="time">
            <div className="time__block">
                {parseTime(time.h)}
                :
                {parseTime(time.m)}
                :
                {parseTime(time.s)}
                :
                {parseTime(time.ms)}
            </div>

        </div>
    )
}

export default Time
