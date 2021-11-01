import React, { forwardRef } from 'react'

import { Select } from '@mui/material';

const MySelect = forwardRef((props, ref) => (
    <>
        <Select {...props} ref={ref} >

        </Select>
    </>
));

export default MySelect

