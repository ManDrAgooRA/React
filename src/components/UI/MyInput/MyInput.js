import React, { forwardRef, useContext } from 'react';
import { Context } from '../../../context/context';
import { TextField } from '@mui/material';

const MyInput = forwardRef((props, ref) => {
    const { state } = useContext(Context);

    return <TextField
        className={state.darkTheme ? 'input active' : 'input'}
        inputRef={ref}
        variant='outlined'
        margin='normal'
        fullWidth
        {...props}
    />
})

export default MyInput