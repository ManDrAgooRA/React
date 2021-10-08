import React, { useContext } from 'react';
// import { useForm } from "react-hook-form";
import { Context } from '../context';
import MyButton from './UI/MyButton/MyButton';
import Step1 from './Step1';
import Step2 from './Step2'
import { Container } from '@material-ui/core';

function Component() {
    const { dispatch, state } = useContext(Context);

    const inc = () => {
        dispatch({ type: 'increament' })
        console.log(state)
    }

    return (

        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <p>Шаг:{state.step}</p>
            {state.step >= 1 && state.step < 2 ? <Step1 ></Step1> : <Step2 ></Step2>}


            {/* {state.step < 2 ?
                <MyButton variant="contained" color="primary" onClick={inc}>Next</MyButton>
                :
                <>
                    <MyButton variant="contained" color="primary" onClick={inc}>2</MyButton>
                    <MyButton variant="contained" color="primary" onClick={() => { dispatch({ type: 'dec' }) }}>1</MyButton>
                </>

            } */}

        </Container>
    )
}

export default Component
