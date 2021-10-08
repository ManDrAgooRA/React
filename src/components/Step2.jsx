import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Context } from '../context';
import Form from './Form'
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

function Step2({ children, ...props }) {
    const schema = yup.object().shape({
        city: yup
            .string()
            .matches(/^([^0-9]*)$/, 'only letters')
            .required('error'),
        street: yup
            .string()
            .required(),
        // home: yup
        //     .required()
    })

    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data);
        dispatch({
            type: 'setName',
            payload: data.name
        })
        dispatch({
            type: 'setLastName',
            payload: data.lastName
        })
    };

    const { dispatch } = useContext(Context);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <MyInput
                {...register("city")}
                id='city'
                type='text'
                label='Город'
                name='city'
            />
            <MyInput
                {...register("street")}
                id='street'
                type='text'
                label='Улица'
                name='street'
            />
            <MyInput
                {...register("home")}
                id='home'
                type='text'
                label='Дом'
                name='home'
            />
            <MyButton >Next</MyButton>
            <MyButton onClick={() => {
                dispatch({
                    type: 'decreament'
                })
            }}>Prev</MyButton>

        </Form>

    )
}

export default Step2
