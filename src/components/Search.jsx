import React from 'react'
import { useDispatch } from 'react-redux';
import MyInput from './UI/Input/MyInput'
import { fetchFoundMovies, fetchMovies } from '../store/thunk'

export default function Search({ setPage, page, setSearchValue }) {
    const dispatch = useDispatch()
    const getSearchValue = (query) => {
        console.log(Boolean('query'))
        if (query) {
            dispatch(fetchFoundMovies(query, page))
        } else {
            // dispatch(fetchFoundMovies('a', page))
            setPage(1)
            dispatch(fetchMovies(1))
        }
    }

    return (
        <MyInput
            placeholder='Enter flim name'
            onChange={(e) => {
                setSearchValue(e.target.value)
                getSearchValue(e.target.value)
            }}
        />
    )
}
