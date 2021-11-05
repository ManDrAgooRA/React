import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '-24px',
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

// CircularProgressWithLabel.propTypes = {
//     /**
//      * The value of the progress indicator for the determinate variant.
//      * Value between 0 and 100.
//      * @default 0
//      */
//     value: PropTypes.number.isRequired,
// };

export default function CircularStatic({ progress }) {
    return <CircularProgressWithLabel value={progress} />;
}