import React from 'react';
import { Container, Grid } from '@mui/material';
// import MyInput from '../UI/Input/MyInput';

export default function CreateModal() {
    return (
        <>
            <Container sx={{ mt: 2 }}>

                <Grid container spacing={2}>

                    <Grid item xs={12} lg={8}>
                        create new page
                    </Grid>

                </Grid>

            </Container>
        </>

    )
}
