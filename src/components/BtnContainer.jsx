import React from 'react'
import { Box } from '@mui/system';

function BtnContainer({ children }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            {children}
        </Box>
    )
}

export default BtnContainer
