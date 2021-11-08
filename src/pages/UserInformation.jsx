import React from 'react'
import { useSelector } from 'react-redux';

export default function UserInformation() {
    const userData = useSelector((state) => state.user)
    console.log(userData)

    return (
        <div>
            UserInformation
        </div>
    )
}
