import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { fetchMovies } from '../actions';
import MovieCard from './MovieCard';

export default function Movies() {
    const { movies } = useSelector((state) => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

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
            </Grid>
        </>
    )
}
