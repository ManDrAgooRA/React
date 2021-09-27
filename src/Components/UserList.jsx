import React from 'react'
import UserItem from './UserItem';
import '../App.css';

function UserList({ user, setVisible, modalUser }) {

    const getUser = (user) => {
        setVisible(true)
        modalUser(user)
    }

    const title = () => {
        if (user.length < 1) {
            return 'Пользователь не найден'
        } else {
            return 'Список пользователей'
        }
    }

    return (
        <>
            <h1>
                {title()}
            </h1>
            <div className='items'>
                {user.map((user) => {
                    return <UserItem user={user} key={user.name + Date.now()} getUser={getUser} />
                })}
            </div>
        </>
    )
}

export default UserList
