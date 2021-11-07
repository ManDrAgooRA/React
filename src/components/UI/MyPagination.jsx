import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function MyPagination({ page, count, changePage }) {

    return (
        <Stack spacing={2} sx={{ width: '100%', display: 'flex', alignItems: 'center', mt: 2 }}>
            <Pagination count={count} page={page} onChange={changePage} />
        </Stack>
    )
}
