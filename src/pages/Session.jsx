import React, { useEffect } from 'react'
import * as api from '../apis'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import Loader from './../components/UI/Loader/Loader';
import { getCurrentUser } from './../store/thunk';

export default function Session() {
    const history = useHistory();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentUser())
        history.push(`/movies`)

        return () => {
            localStorage.removeItem('request_token')
        }

    }, [dispatch])

    return (
        <>
            <Loader />
        </>
    )
}
