import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import { fetchSelectedMovie } from '../store/actions';
import Loader from './../components/UI/Loader/Loader';
import CircularStatic from '../components/UI/CircularStatic';
import MyButton from './../components/UI/Button/MyButton';

export default function MoviePage() {
    const history = useHistory();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSelectedMovie(id))
    }, [dispatch])

    const { selectedMovies, isLoadingCurrentMovie } = useSelector((state) => state.movies)

    const { id } = useParams();
    if (isLoadingCurrentMovie) {
        return <Loader />
    }

    return (
        <>
            <Grid container spacing={2}
                sx={{
                    my: 4
                }}
            >
                <Grid item xs={12} lg={2}>
                    <Box
                        sx={{ display: 'flex' }}
                    >
                        <img src={`https://image.tmdb.org/t/p/w500${selectedMovies.poster_path}`} alt="poster"
                            style={{
                                borderRadius: '14px'
                            }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} lg={10}>
                    <MyButton onClick={() => { history.goBack() }}
                        sx={{ my: 2 }}

                    >back</MyButton>

                    <Box>
                        <Typography variant='h4' component='h4'>{selectedMovies.original_title}</Typography>
                        <Box sx={{ position: 'relative', width: '40px', height: '40px' }}>
                            <CircularStatic progress={Math.round(selectedMovies.vote_average * 10)} />
                        </Box>
                        <p>{selectedMovies.overview}</p>
                        <p>Genres:</p>
                        <ul>
                            {selectedMovies.genres.map((genre) => {
                                return <li key={genre.name}>{genre.name}</li>
                            })}
                        </ul>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

