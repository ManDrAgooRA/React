import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { setCurrentPage } from '../store/actions'
import MovieCard from './MovieCard';
import Loader from './../components/UI/Loader/Loader';
import MyPagination from '../components/UI/MyPagination';
import { fetchMovies } from './../store/thunk';

export default function Movies() {
    const dispatch = useDispatch();
    const { movies, isLoading, totalPages, currentPage } = useSelector((state) => state.movies)
    const [page, setPage] = useState(currentPage)

    useEffect(() => {
        let pageLocal = JSON.parse(localStorage.getItem('currentPageLocalStorage'))
        if (pageLocal) {
            setPage(pageLocal)
            setCurrentPage(pageLocal)
        } else {
            setPage(currentPage)
            setCurrentPage(currentPage)
        }
        dispatch(fetchMovies(pageLocal))
    }, [dispatch, page, currentPage])


    const changePage = (event, value) => {
        setPage(value)
        setCurrentPage(value)
        localStorage.setItem('currentPageLocalStorage', JSON.stringify(value))
    }


    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <Grid container spacing={2} sx={{ my: 4 }}>
                {movies.map((movie) => {
                    return (
                        <Grid key={uuidv4()} item xs={12} md={3} >
                            <MovieCard movie={movie}></MovieCard>
                        </Grid>
                    )
                })}
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <MyPagination count={totalPages} page={page} changePage={changePage} />
                </Grid>
            </Grid>
        </>
    )
}
