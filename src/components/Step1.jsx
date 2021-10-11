import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Context } from '../context';
import Form from './Form';
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import FormContainer from './FormContainer';
import BtnContainer from './BtnContainer';

function Step1({ children, ...props }) {
    const { dispatch, state } = useContext(Context);

    const schema = yup.object().shape({
        name: yup
            .string()
            .matches(/^([^0-9]*)$/, 'only letters')
            .required(),
        lastName: yup
            .string()
            .required(),
        email: yup
            .string()
            .email()
            .required(),
    })

    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            name: state.name,
            lastName: state.lastName,
            email: state.email,
        }
    })

    const onSubmit = (data) => {

        dispatch({
            type: 'setName',
            payload: data.name
        })

        dispatch({
            type: 'setLastName',
            payload: data.lastName
        })

        dispatch({
            type: 'setEmail',
            payload: data.email
        })

        dispatch({
            type: 'increment',
        })
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit(onSubmit)} >

                <MyInput
                    {...register("name")}
                    id='name'
                    type='text'
                    label='Имя'
                    name='name'
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                />

                <MyInput
                    {...register("lastName")}
                    id='lastName'
                    type='text'
                    label='Фамилия'
                    name='lastName'
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                />

                <MyInput
                    {...register("email")}
                    id='eamil'
                    type='email'
                    label='Email'
                    name='email'
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />
                <BtnContainer>
                    <MyButton sx={{ width: 200, textAlign: 'center' }}>Next</MyButton>
                </BtnContainer>

            </Form >
        </FormContainer >
    )
}

export default Step1
