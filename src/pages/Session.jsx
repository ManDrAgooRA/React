import React, { useEffect } from 'react'
import * as api from '../apis'
import { useHistory } from 'react-router';
import Loader from './../components/UI/Loader/Loader';

export default function Session() {
    const history = useHistory();

    useEffect(() => {
        getSessionId()

        return () => {
            localStorage.removeItem('request_token')
        }
    }, [])

    const getSessionId = async () => {
        const request_token = localStorage.getItem('request_token')

        const sessionResponse = await api.getSessionId(request_token)
        localStorage.setItem('session_id', sessionResponse.data.session_id)
        // console.log(sessionResponse)
        history.push(`/movies`)
    }

    return (
        <>
            {/* <Loader /> */}
            lorem
        </>
    )
}
