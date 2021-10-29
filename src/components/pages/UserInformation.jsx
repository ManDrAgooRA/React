import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedUsers } from '../../actions';

export default function UserInformation() {
    const { filtredUsers, selectedUser } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(setSelectedUsers(id))
    }, [dispatch])


    return (
        <>
            {id}
        </>
    )
}
