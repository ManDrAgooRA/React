import React from 'react'
import { Typography, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';
import * as yup from "yup";
import { logIn } from '../store/actions';
import MyInput from '../components/UI/Input/MyInput'
import MyButton from './../components/UI/Button/MyButton';

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
    }).required()

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        dispatch(logIn(data))
        history.push(`/movies`)
        reset()
    }

    return (
        <>
            <Grid container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                <Grid item xs={12} lg={6}>

                    <Typography variant="h4" component="h4" sx={{ textAlign: 'center', my: 4 }}>Login</Typography>

                    <form
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            border: '1px solid #032541',
                            borderRadius: '14px',
                            padding: '20px',
                        }}
                        onSubmit={handleSubmit(onSubmit)}>

                        <MyInput
                            {...register("email")}
                            label="Enter email"
                            error={!!errors.email}
                            helperText={errors?.email?.message}
                        />

                        <MyInput
                            {...register("password")}
                            type={'password'}
                            label="Enter password"
                            error={!!errors.password}
                            helperText={errors?.password?.message}
                        />

                        <MyButton
                            type="submit"
                            sx={{
                                mt: 2
                            }}
                        >
                            login
                        </MyButton>

                    </form>
                </Grid>
            </Grid>
        </>
    )
}
