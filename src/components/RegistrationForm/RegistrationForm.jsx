import React from 'react'
import { useForm } from "react-hook-form";
import MyInput from '../UI/Input/MyInput';
import MyButton from '../UI/Button/MyButton';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { changeModalState, setFirstName, setSecondName, setUserId } from '../../actions'
import { getId } from '../../utils';
import ModalForm from '../ModalForm/ModalForm';
import './RegistrationForm.scss'

export default function RegistrationForm() {
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        secondName: yup.string().required(),
    }).required();

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    })

    const id = getId();
    const onSubmit = data => {
        dispatch(setFirstName(data.firstName))
        dispatch(setSecondName(data.secondName))
        dispatch(setUserId(id))
        reset()
        dispatch(changeModalState(true));
    }

    return (
        <>
            <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
                Registration user
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} >

                <label>First name:</label>
                <MyInput
                    {...register("firstName")}
                    placeholder='Enter first name...'
                    sx={{ marginBottom: '5px' }}
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                />

                <label>Second name:</label>
                <MyInput {...register("secondName")} placeholder='Enter second name...' sx={{ marginBottom: '5px' }}
                    error={!!errors.secondName}
                    helperText={errors?.secondName?.message}
                />

                <MyButton type="submit" >Register participant</MyButton>

            </form>

            <ModalForm />
        </>
    );
}
