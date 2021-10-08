import React from 'react'
import Button from '@material-ui/core/Button';

function MyButton({ children, ...props }) {
    return (
        <Button type="submit" fullWidth color='primary'
            variant="contained"{...props}>
            {children}
        </Button>
    )
}

export default MyButton
