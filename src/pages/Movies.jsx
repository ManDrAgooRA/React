import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { fetchMovies, setCurrentPage } from '../store/actions'
import MovieCard from './MovieCard';
import Loader from './../components/UI/Loader/Loader';
import MyPagination from '../components/UI/MyPagination';

export default function Movies() {
    const dispatch = useDispatch();
    const { movies, isLoading, totalPages, currentPage } = useSelector((state) => state.movies)
    const [page, setPage] = useState(currentPage)


    useEffect(() => {
        let page = JSON.parse(localStorage.getItem('currentPage'))
        setPage(page)
        setCurrentPage(page)
        dispatch(fetchMovies(page))
    }, [dispatch, page])

    const changePage = (event, value) => {
        setPage(value)
        setCurrentPage(value)
        localStorage.setItem('currentPage', JSON.stringify(value))
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
                            <MovieCard key={uuidv4()} movie={movie}></MovieCard>
                        </Grid>
                    )
                })}
                <MyPagination count={totalPages} page={page} changePage={changePage} />
            </Grid>
        </>
    )
}
