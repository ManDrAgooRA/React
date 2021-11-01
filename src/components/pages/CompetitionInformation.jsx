import React from 'react'
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { CardActionArea, CardActions, CardContent, Card, Grid, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, setCurrentWinner } from '../../actions';
import MyButton from '../UI/Button/MyButton'

export default function CompetitionInformation() {
    const { filtredContests, filtredUsers, winner } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const { id } = useParams();

    let currentContest = filtredContests.filter((item) => {
        return item.id === id
    })

    let allUsers = filtredUsers.filter((user) => {
        return user.competition === currentContest[0].name
    })

    const deleteFuntion = (user) => {
        dispatch(deleteUser(filtredUsers.filter((filtredUser) => {
            return filtredUser.id !== user.id
        })))

        if (Object.keys(winner).length !== 0) {
            dispatch(showWinner({}))
        }
    }

    const showWinner = () => {
        let min = +allUsers[0].time.split(':').join('')
        let winner = {}

        for (let i = 0; i < allUsers.length; i++) {
            if (+allUsers[i].time.split(':').join('') < min) {
                min = +allUsers[i].time.split(':').join('')
                winner = allUsers[i]
            } else {
                winner = allUsers[0]
            }
        }

        dispatch(setCurrentWinner(winner))
    }

    return (
        <>
            <Typography sx={{ textAlign: 'center', mb: 2 }} variant="h2" component="h2">Participants</Typography>
            <MyButton sx={{ textAlign: 'center', mb: 2 }} onClick={showWinner} >Show winner</MyButton>
            {Object.keys(currentContest[0].winner).length > 0
                ?
                <Grid key={uuidv4()} item xs={4} lg={4} >
                    <Card sx={{ mb: 2, textAlign: 'center', border: '1px solid #bebebe' }} >
                        <CardActionArea >
                            <CardContent>
                                <p>Winner</p>
                                <p>id : {currentContest[0].winner.id}</p>
                                <p>name : {currentContest[0].winner.name}</p>
                                <p>time : {currentContest[0].winner.time}</p>
                                <p>competition : {currentContest[0].winner.competition}</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                :
                <Grid>
                    <Typography sx={{ textAlign: 'center', mb: 2 }} variant="h4" component="h4">In progress..</Typography>
                </Grid>
            }
            <hr />

            <Grid container spacing={2}>

                {allUsers.map((user) => {
                    return (
                        <Grid key={uuidv4()} item xs={4} lg={4} >
                            <Card sx={{ mb: 2, textAlign: 'center', border: '1px solid #bebebe' }} >
                                <CardActionArea >
                                    <CardContent>
                                        <p>id : {user.id}</p>
                                        <p>name : {user.name}</p>
                                        <p>time : {user.time}</p>
                                        <p>competion : {user.competition}</p>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                    <MyButton size="small" color="primary" onClick={() => deleteFuntion(user)}>
                                        Delete
                                    </MyButton>

                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}
