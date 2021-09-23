import React from 'react'
import cl from './MyButton.module.css'

function MyButton({ name, ...props }) {
    return (
        <button {...props} className={cl.MyButton}>{name}</button>
    )
}

export default MyButton
