import React, { forwardRef } from 'react'
import { TextField } from '@mui/material'

const MyInput = forwardRef((props, ref) => {
    return <TextField
        inputRef={ref}
        variant='outlined'
        margin='normal'
        fullWidth
        {...props}
    />
})



export default MyInput