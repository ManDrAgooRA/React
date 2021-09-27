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
                {children}
            </div>
        </div >

    )
}

export default MyModal
