import React from 'react';
import MyButton from './UI/Button/MyButton';
import { CardActionArea, CardActions, CardContent, Card } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, showWinner } from '../actions';

export default function UserCard({ user }) {
    const { filtredUsers } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const deleteFuntion = (user) => {
        dispatch(deleteUser(filtredUsers.filter((filtredUser) => {
            return filtredUser.id !== user.id
        })))
        dispatch(showWinner({}))
    }

    return (
        <Card sx={{ mb: 2, textAlign: 'center', border: '1px solid #bebebe' }} >
            <CardActionArea>
                <CardContent>
                    <p>id : {user.id}</p>
                    <p>name : {user.name}</p>
                    <p>time : {user.time}</p>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                <MyButton size="small" color="primary" onClick={(e) => deleteFuntion(user)}>
                    Delete
                </MyButton>
            </CardActions>
        </Card>
    )
}
