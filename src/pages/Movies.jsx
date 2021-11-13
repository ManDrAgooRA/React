import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { v4 as uuidv4 } from 'uuid';
import { setCurrentPage } from '../store/actions'
import MovieCard from './MovieCard';
import Loader from './../components/UI/Loader/Loader';
import MyPagination from '../components/UI/MyPagination';
import Search from '../components/Search';
import { fetchMovies, fetchFoundMovies, fetchGenres } from './../store/thunk';
import FilterByGener from '../components/FilterByGener';
import { fetchFilterByGener } from '../store/thunk';

export default function Movies() {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('')
    const { movies, isLoading, totalPages, currentPage } = useSelector((state) => state.movies)
    const [page, setPage] = useState()
    const [checked, setChecked] = useState([])

    useEffect(() => {
        dispatch(fetchGenres())
        let a = JSON.parse(localStorage.getItem('currentPageLocalStorage'))

        // if (a || !setChecked || !checked) {
        if (a) {
            dispatch(fetchMovies(a))
            setPage(a)
            console.log('movie')
        } else {
            setPage(1)
            console.log('work')
        }

    }, [dispatch])


    useEffect(() => {
        if (checked.length !== 0) {
            dispatch(fetchFilterByGener(checked.join(','), page))
            setSearchValue('')
            localStorage.removeItem('searchValue')
            console.log('checked')
        }
    }, [checked, page])


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

                <Grid item xs={12} lg={12}>
                    <Search setPage={setPage} page={page} searchValue={searchValue} setSearchValue={setSearchValue} setChecked={setChecked} />
                </Grid>

                <Grid item xs={12} lg={3}
                    sx={{
                        padding: 0,
                        fontSize: '14px',
                    }}
                >
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Sort by</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <FilterByGener
                        page={page}
                        setPage={setPage}
                        checked={checked}
                        setChecked={setChecked}
                    />
                </Grid>
                <Grid container spacing={2} item lg={9} >
                    {movies.map((movie) => {
                        return (
                            <Grid key={uuidv4()} item xs={12} lg={3} >
                                <MovieCard movie={movie}></MovieCard>
                            </Grid>
                        )
                    })}
                </Grid>

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
