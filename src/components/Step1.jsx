import React, { useState, useContext, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Context } from '../context';
import Form from './Form';
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

function Step1({ children, ...props }) {
    const { dispatch, dataForm } = useContext(Context);
    // useEffect = ({

    // }, [])

    const schema = yup.object().shape({
        name: yup
            .string()
            .matches(/^([^0-9]*)$/, 'only letters')
            .required('error'),
        lastName: yup
            .string()
            .required(),
        email: yup
            .string()
            .email()
    })

    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            name: dataForm.name,
        }
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
        dispatch({
            type: 'increament',
        })
        console.log(dataForm.name)
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} >
            <MyInput
                {...register("name")}
                id='name'
                type='text'
                label='Имя'
                name='name'
                error={!!errors.name}
                helperText={errors?.name?.message}
            // value={dataForm.name}
            // active={true}
            />
            <MyInput
                {...register("lastName")}
                id='lastName'
                type='text'
                label='Фамилия'
                name='lastName'
            />
            <MyInput
                {...register("email")}
                id='eamil'
                type='email'
                label='Email'
                name='email'
            />
            <MyButton >Next</MyButton>
        </Form >
    )
}

export default Step1
