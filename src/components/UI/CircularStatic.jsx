import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {

    return (
        <Box
            sx={{
                display: 'inline-flex',
                background: '#212121',
                borderRadius: '50%'
            }}
        >
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="#f3e5f5" >
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

export default function CircularStatic({ progress }) {
    return <CircularProgressWithLabel value={progress} />;
}

CircularStatic.propTypes = {
    progress: PropTypes.number
}