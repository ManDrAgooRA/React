import React from 'react'
import { Container } from '@mui/material';
// import { useSelector } from 'react-redux';
import Routes from '../routes/Routes';
import Header from '../components/Header/Header'

export default function Main() {
    return (
        <>
            <Header />
            <Container>
                <Routes />
            </Container>
        </>
    )
}
