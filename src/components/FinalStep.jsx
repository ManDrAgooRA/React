import React, { useContext } from 'react';
import { Context } from '../context/context';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/system';

function FinalStep() {
    const { state } = useContext(Context);

    return (
        <>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'left',
            }}>
                <h2 >
                    Спасибо за регистрацию
                </h2>

                <Box className="img__wrap" style={{ display: 'flex', justifyContent: 'center' }} >
                    <img src={state.image} alt="avatar" style={{ width: '150px', height: '150px' }} />
                </Box>

                <h2>Контактная информация</h2>
                <p>Имя: {state.name}</p>
                <p>Фамилия: {state.lastName}</p>
                <p>Email: {state.email}</p>
                <p>Город: {state.city}</p>
                <p>Улица: {state.street}</p>
                <p>Дом: {state.home}</p>

            </Container>
        </>
    )
}

export default FinalStep
