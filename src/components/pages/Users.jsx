import React from 'react'
import UserCard from '../UserCard'
import { v4 as uuidv4 } from 'uuid';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux'

export default function Users() {
    const { filtredUsers } = useSelector((state) => state.users);
    return (
        <Grid container spacing={2}>
            {filtredUsers.map((user) => {
                return (
                    <Grid item xs={4} key={uuidv4()}>
                        <UserCard user={user} />
                    </Grid>)
            })}
        </Grid >
    )
}
