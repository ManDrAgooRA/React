import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { CardActionArea, CardContent, Card } from '@mui/material';
import { Grid } from '@mui/material';


export default function UserInformation() {
    const { filtredUsers } = useSelector((state) => state.users)
    const { id } = useParams();

    const currentUser = filtredUsers.filter((user) => {
        return user.id === id
    })


    // console.log(contests.participants)

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card sx={{ mb: 2, textAlign: 'center', border: '1px solid #bebebe' }} >
                        <CardActionArea>
                            <CardContent>
                                <p>id : {currentUser[0].id}</p>
                                <p>name : {currentUser[0].name}</p>
                                <p>time : {currentUser[0].time}</p>
                                <p>contests : {currentUser[0].competition}</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

        </>
    )
}
