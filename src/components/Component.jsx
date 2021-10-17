import React, { useContext } from 'react';
import { Context } from '../context/context';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import FinalStep from './FinalStep';
import { Container } from '@material-ui/core';
import MyButton from './UI/MyButton/MyButton';

function Component() {
    const { state, dispatch } = useContext(Context);

    const themeToggler = () => {
        if (state.darkTheme) {
            dispatch({
                type: 'changeTheme',
                payload: false
            })
        } else {
            dispatch({
                type: 'changeTheme',
                payload: true
            })
        }
    }

    return (
        <div className={state.darkTheme ? 'wrapper active' : 'wrapper'}>

            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '100vh'
            }}>

                {state.step === 1 ? <Step1></Step1> : ''}
                {state.step === 2 ? <Step2></Step2> : ''}
                {state.step === 3 ? <Step3></Step3> : ''}
                {state.step === 4 ? <Step4></Step4> : ''}
                {state.step === 5 ? <FinalStep></FinalStep> : ''}

                <MyButton onClick={themeToggler} sx={{ position: 'fixed', top: '50px', left: '50px', width: '200px' }} >Change theme</MyButton>
            </Container>
        </div>
    )
}

export default Component
