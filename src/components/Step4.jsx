import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Context } from '../context/context';

import Form from './Form'
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton';
import FormContainer from './FormContainer';
import BtnContainer from './BtnContainer';

function Step4({ children, ...props }) {
    const { dispatch, } = useContext(Context);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        if (data.password === data.password_repeat) {
            dispatch({
                type: 'increment',
            })
        } else {
            alert('Пароль не совпадает')
        }
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <MyInput
                    {...register('password')}
                    id='password'
                    type='password'
                    label='Пароль'
                    name='password'
                />

                <MyInput
                    {...register('password_repeat')}
                    id='password_repeat'
                    type='password'
                    label='Подтвердите Пароль'
                    name='password_repeat'
                />

                <BtnContainer>
                    <MyButton onClick={() => {
                        dispatch({
                            type: 'decrement'
                        })
                    }}>Prev</MyButton>

                    <MyButton type='submit'>Submit</MyButton>
                </BtnContainer>

            </Form>
        </FormContainer>

    );

}


export default Step4
