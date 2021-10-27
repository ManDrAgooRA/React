import React, { useEffect } from 'react';
import MyInput from './UI/Input/MyInput';
import { Container, Grid } from '@mui/material';
import Users from './Users';
import WinnerInfo from './WinnerInfo';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import { addUser } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { findUser } from '../actions';

function AppComponent() {
    const dispatch = useDispatch();
    const { filtredUsers } = useSelector((state) => state.users)

    useEffect(() => {
        let usersLocalStorageData = JSON.parse(localStorage.getItem('users'));
        usersLocalStorageData.map((item) => {
            return dispatch(addUser(item))
        })
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(filtredUsers))
    }, [filtredUsers])

    const handlerChange = (e) => {
        dispatch(findUser(e.target.value))
    }

    return (
        <>
            <Container sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={8}>
                        <MyInput fullWidth sx={{ mb: 2 }} placeholder='Enter participant name...' onChange={e => handlerChange(e)}></MyInput>
                        <Users />
                    </Grid>
                    <Grid item xs={4} lg={4}>
                        <RegistrationForm />
                        <WinnerInfo />
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default AppComponent;
