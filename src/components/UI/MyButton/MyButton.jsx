import React from 'react'
import Button from '@material-ui/core/Button';

function MyButton({ children, ...props }) {
    return (
        <Button
            type="submit"
            fullWidth
            color='primary'
            variant="contained"
            sx={{
                width: '100px',
                mx: 2
            }}
            {...props}
        >
            {children}
        </Button>
    )
}

export default MyButton
