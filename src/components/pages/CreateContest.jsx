import React from 'react';
import { Container, Grid } from '@mui/material';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from "react-router-dom";
import * as yup from "yup"
import { useDispatch } from 'react-redux';
import { createContents } from '../../actions';
import MyInput from '../UI/Input/MyInput';
import MyButton from '../UI/Button/MyButton';
import { getId } from './../../utils';

export default function CreateContest() {
    const dispatch = useDispatch();
    const history = useHistory();

    const schema = yup.object().shape({
        contests: yup.string().required(),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = data => {
        dispatch(createContents({ name: data.contests, id: getId(), status: 'active', winner: {} }))
        history.push('/competition');
    }
    return (
        <>
            <Container sx={{ mt: 2 }}>

                <Grid container spacing={2}>

                    <Grid item xs={12} lg={12} >
                        <form onSubmit={handleSubmit(onSubmit)} >

                            <label>Add new contests:</label>
                            <MyInput
                                {...register("contests")}
                                placeholder='Add new contests...'
                                sx={{ marginBottom: '5px' }}
                                error={!!errors.contests}
                                helperText={errors?.contests?.message}
                            />

                            <MyButton type="submit" >Add new contests</MyButton>

                        </form>
                    </Grid>

                </Grid>

            </Container>
        </>

    )
}
