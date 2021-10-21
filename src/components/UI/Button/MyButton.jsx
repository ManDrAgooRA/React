import React from 'react'
import './MyButton.scss'

export default function MyButton({ children, ...props }) {
    return (
        <button className='button' {...props}>{children}</button>
    )
}
