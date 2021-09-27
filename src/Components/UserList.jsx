import React from 'react'
import UserItem from './UserItem';
import '../App.css';

function UserList({ user, setVisible }) {


    const show = () => {
        setVisible(true)
    }

    const a = (a) => {
        console.log(a.target)
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
                    return <UserItem user={user} key={user.name + Date.now()} show={show} getId={a} />
                })}
            </div>
        </>
    )
}

export default UserList
