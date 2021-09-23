import React from 'react'
import UserItem from './UserItem';
import '../App.css';

function UserList({ user }) {
    return (
        <div className='items'>
            {user.map((user) => {
                return <UserItem user={user} key={user.name + Date.now()} />
            })}
        </div>
    )
}

export default UserList
