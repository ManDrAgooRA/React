import React, { forwardRef } from 'react'
import { TextField } from '@mui/material'

const MyInput = forwardRef((props, ref) => {
    return (
        <TextField {...props} inputRef={ref} />
    )
})

export default MyInput