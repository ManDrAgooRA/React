import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
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
import { fetchMovies, fetchFoundMovies } from './../store/thunk';
// import * as api from '../apis'

export default function Movies() {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('')
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

        if (searchValue) {
            dispatch(fetchFoundMovies(searchValue, pageLocal))
        } else {
            dispatch(fetchMovies(pageLocal))
        }
    }, [dispatch, page, currentPage, searchValue])


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
                    <Search setPage={setPage} page={page} setSearchValue={setSearchValue} />
                </Grid>

                <Grid item xs={12} lg={2} sx={{ padding: 0 }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid container spacing={2} item lg={10} >
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
