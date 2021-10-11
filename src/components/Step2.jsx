import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Context } from '../context';
import Form from './Form'
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import FormContainer from './FormContainer';
import BtnContainer from './BtnContainer';

function Step2({ children, ...props }) {
    const { dispatch, state } = useContext(Context);

    const schema = yup.object().shape({
        city: yup
            .string()
            .required(),
        street: yup
            .string()
            .required(),
        home: yup
            .string()
            .required()
    })

    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            city: state.city,
            street: state.street,
            home: state.home,
        }
    })

    const onSubmit = (data) => {

        dispatch({
            type: 'setCity',
            payload: data.city
        })

        dispatch({
            type: 'setStreet',
            payload: data.street
        })

        dispatch({
            type: 'setHome',
            payload: data.home
        })

        dispatch({
            type: 'increment',
        })
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <MyInput
                    {...register("city")}
                    id='city'
                    type='text'
                    label='Город'
                    name='city'
                    error={!!errors.city}
                    helperText={errors?.city?.message}
                />
                <MyInput
                    {...register("street")}
                    id='street'
                    type='text'
                    label='Улица'
                    name='street'
                    error={!!errors.street}
                    helperText={errors?.street?.message}
                />
                <MyInput
                    {...register("home")}
                    id='home'
                    type='text'
                    label='Дом'
                    name='home'
                    error={!!errors.home}
                    helperText={errors?.home?.message}
                />

                <BtnContainer>

                    <MyButton onClick={() => {
                        dispatch({
                            type: 'decrement'
                        })
                    }}>Prev</MyButton>

                    <MyButton >Next</MyButton>
                </BtnContainer>


            </Form>

        </FormContainer>
    )
}

export default Step2
