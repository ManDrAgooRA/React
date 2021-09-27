import React from 'react'
import cl from './MyModal.module.css'

function MyModal({ children, visible, setVisible }) {

    const modalClass = [cl.myModal];

    if (visible) {
        modalClass.push(cl.active);
    }

    return (
        <div className={modalClass.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                <img src={children.picture} alt={children.picture} />
                <p>name: {children.name}</p>
                <p>age: {children.age}</p>
                <p>gender: {children.gender}</p>
                <p>balance: {children.balance}</p>
            </div>
        </div >

    )
}

export default MyModal
