import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Typography, InputLabel, FormControl, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import MyInput from '../UI/Input/MyInput';
import MyButton from '../UI/Button/MyButton';
import MySelect from '../UI/Select/MySelect'
import { changeModalState, setRegisterData } from '../../actions'
import { getId } from '../../utils';
import ModalForm from '../ModalForm/ModalForm';
import './RegistrationForm.scss'

export default function RegistrationForm() {
    const [value, setValue] = useState('');
    const { contests } = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        secondName: yup.string().required(),
        contest: yup.string().required(),
    }).required();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    })

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const id = getId();
    const onSubmit = data => {
        dispatch(setRegisterData({
            firstName: data.firstName,
            secondName: data.secondName,
            id: id,
            competition: data.contest
        }))

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

                <FormControl sx={{ my: 2 }}>
                    <InputLabel id="demo-simple-select-standard-label">Choose contests</InputLabel>
                    <MySelect
                        {...register("contest")}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Choose contests"
                        value={value}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {contests.map((item) => {
                            return <MenuItem key={uuidv4()} value={item.name}>{item.name}</MenuItem>
                        })}
                    </MySelect>
                </FormControl>

                <MyButton type="submit" >Register participant</MyButton>

            </form>

            <ModalForm />
        </>
    );
}
