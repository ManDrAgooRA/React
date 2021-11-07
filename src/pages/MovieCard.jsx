import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/material';
import { useHistory } from 'react-router';
import CircularStatic from '../components/UI/CircularStatic';

export default function MovieCard({ movie }) {
    const history = useHistory()

    const redirectHandler = () => {
        history.push(`/movies/${movie.id}`)
    }

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                '&:hover': {
                    boxShadow: '5px 7px 12px 0px rgba(34, 60, 80, 0.29)'
                }
            }}>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 0
                }}>

                <Box
                    sx={{
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }}
                    onClick={redirectHandler}
                >
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" style={{ maxWidth: '100%' }} />
                </Box>

                <Box sx={{
                    padding: '26px 20px 0 20px',
                    position: 'relative'
                }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '-24px',
                        }}
                    >
                        <CircularStatic progress={Math.round(movie.vote_average * 10)} />
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >

                        <Box>
                            <Typography color="text.primary"
                                sx={{
                                    fontWeight: 'bold',
                                    transition: '.4s',
                                    '&:hover': {
                                        color: '#1e88e5',
                                        cursor: 'pointer'
                                    }
                                }}
                                onClick={redirectHandler}

                            >
                                {movie.original_title}
                            </Typography>
                            <Typography color="text.secondary">
                                {movie.release_date}
                            </Typography>
                        </Box>

                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>
                    </Box>
                </Box>
            </CardContent>
        </Card >
    );
}
