import React from 'react'

function UserItem({ user, show, getId }) {

    return (
        <div className='item' onClick={e => getId(e)}>
            <div className="item__wrap" data-id={user._id}>
                <div className="item__img">
                    <img src={user.picture} alt={user.picture} />
                </div>
                <div className="item__content">
                    <p>name: {user.name}</p>
                    <p>age: {user.age}</p>
                    <p>gender: {user.gender}</p>
                    <p>balance: {user.balance}</p>
                </div>
            </div>
        </ div >
    )
}

export default UserItem
