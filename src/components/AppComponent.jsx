import React, { useEffect } from 'react';
import MyInput from './UI/Input/MyInput';
import { Container, Grid } from '@mui/material';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import { addUser } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { findUser, findContests, createContents } from '../actions';
import Header from './Header/Header';
import Routes from '../Routes';

function AppComponent() {
    const dispatch = useDispatch();
    const { filtredUsers, contests } = useSelector((state) => state.users)

    useEffect(() => {
        const usersLocalStorageData = JSON.parse(localStorage.getItem('users'));
        usersLocalStorageData.map((item) => {
            return dispatch(addUser(item))
        })
    }, [dispatch])

    useEffect(() => {
        const contentsLocalStorageData = JSON.parse(localStorage.getItem('contents'));
        contentsLocalStorageData.map((item) => {
            return dispatch(createContents(item))
        })
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(filtredUsers))
    }, [filtredUsers])

    useEffect(() => {
        localStorage.setItem('contents', JSON.stringify(contests))
    }, [contests])


    const handlerChange = (e) => {
        dispatch(findUser(e.target.value))
        dispatch(findContests(e.target.value))
    }

    return (
        <>
            <Header></Header>
            <Container sx={{ mt: 2 }}>

                <Grid container spacing={2}>
                    <Grid item xs={12} lg={8}>
                        <MyInput fullWidth sx={{ mb: 2 }} placeholder='Enter participant name or compatition name...' onChange={e => handlerChange(e)}></MyInput>

                        <Routes />

                    </Grid>

                    <Grid item xs={4} lg={4}>
                        <RegistrationForm />
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default AppComponent;
