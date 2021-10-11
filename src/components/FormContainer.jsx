import React, { useContext } from 'react'
import { Box } from '@mui/system';
import { Context } from '../context';


function FormContainer({ children, ...props }) {
    const { state } = useContext(Context);

    return (

        <Box className={state.darkTheme ? 'box__container active' : 'box__container'} sx={{ width: '300px', display: 'flex', justifyContent: 'center', p: 2, mt: 2, mx: "auto", borderRadius: '20px', border: 1, minHeight: '300px' }} {...props}>
            {children}
        </Box>

    )
}

export default FormContainer
