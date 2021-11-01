import React from 'react'
import MyButton from '../UI/Button/MyButton';
import { CardActionArea, CardActions, CardContent, Card, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Grid } from '@mui/material';

export default function CompetitionList() {
    const { filtredContests } = useSelector((state) => state.users)
    const history = useHistory();

    return (

        <div>
            <Typography sx={{ textAlign: 'center', mb: 2 }} variant="h2" component="h2">All competition</Typography>
            <Grid container spacing={2}>
                {filtredContests.length ?
                    filtredContests.map((item) => {
                        return (
                            <Grid key={uuidv4()} item xs={4}>
                                <Card sx={{ mb: 2, textAlign: 'center', border: '1px solid #bebebe' }} >
                                    <CardActionArea >
                                        <CardContent>
                                            <p>id : {item.id}</p>
                                            <p>name : {item.name}</p>
                                            <p>status : {item.status}</p>
                                            {item.status === 'finished' ?
                                                <p>winner: {item.winner.name}</p>
                                                :
                                                <p>winner: in progress</p>
                                            }
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                        <MyButton size="small" color="primary" onClick={() => { history.push(`/competition/${item.id}`) }} >
                                            Show
                                        </MyButton>

                                    </CardActions>
                                </Card>

                            </Grid>
                        )
                    })
                    :
                    'Create contest'
                }

            </Grid >

        </div>
    )
}
