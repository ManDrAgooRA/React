import React, { useEffect } from 'react'
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MyInput from './UI/Input/MyInput'
import MyButton from './UI/Button/MyButton'
import { fetchFoundMovies, fetchMovies } from '../store/thunk'

export default function Search({ setPage, page, searchValue, setSearchValue, setChecked }) {
    const dispatch = useDispatch()


    useEffect(() => {
        if (localStorage.getItem('searchValue')) {
            dispatch(fetchFoundMovies(localStorage.getItem('searchValue'), page))
        } else {
            dispatch(fetchMovies(page))
        }

    }, [page])

    const schema = yup.object().shape({
        search: yup
            .string()
            .required(),
    })

    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            search: localStorage.getItem('searchValue'),
        }
    })

    const onSubmit = ({ search }) => {
        if (search) {
            dispatch(fetchFoundMovies(searchValue, page))
            localStorage.setItem('searchValue', searchValue)
        } else {
            setPage(1)
            dispatch(fetchMovies(1))
        }
    };

    const handlerReset = () => {
        setSearchValue('')
        localStorage.removeItem('searchValue')
        localStorage.setItem('currentPageLocalStorage', 1)
        setPage(1)
        dispatch(fetchMovies(1))
        setChecked([])
    }

    const checkValue = (value) => {
        if (value.length === 0) {
            handlerReset()
        }
    }

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <MyInput
                    {...register("search")}
                    placeholder='Enter flim name'
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                        checkValue(e.target.value)
                    }}
                    error={!!errors.search}
                    helperText={errors?.search?.message}
                />
                <Box>
                    <MyButton type='submit' sx={{ marginRight: 2 }}>Search</MyButton>
                    <MyButton type='reset' onClick={handlerReset}>Reset</MyButton>
                </Box>
            </form>

        </Box>

    )
}

Search.propTypes = {
    setPage: PropTypes.func,
    page: PropTypes.number,
    searchValue: PropTypes.string,
    setSearchValue: PropTypes.func,
}

Search.defaultProps = {
    page: 1,
    searchValue: '',
    setPage: () => { },
    setSearchValue: () => { },
    setChecked: () => { },
}