import React from 'react'
import './Form.scss'
import { setFirstNamePlayer, setSecondNamePlayer } from '../../actions'
import { useGameStore } from '../../context'
import { useForm } from "react-hook-form";

export default function Form() {
    const [dispatch] = useGameStore();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        dispatch(setFirstNamePlayer(data.fisrstNamePlayer))
        dispatch(setSecondNamePlayer(data.secondNamePlayer))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>First Player: X</p>
            <input {...register("fisrstNamePlayer", { required: true })} />

            <p>Second Player: O</p>
            <input {...register("secondNamePlayer", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}

            <button type="submit">Change player`s names</button>
        </form >
    );
}
