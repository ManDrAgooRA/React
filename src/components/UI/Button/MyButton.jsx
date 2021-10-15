import React from 'react'
import './MyButton.scss'

export default function MyButon({ children, ...props }) {
    return (
        <button className='button' {...props}>{children}</button>
    )
}
