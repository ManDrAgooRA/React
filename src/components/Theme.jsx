import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme/theme';
import { useSelector } from 'react-redux';


export default function Theme({ children }) {
    const { isLightMode } = useSelector((state) => state.theme)

    const slectedTheme = createTheme(isLightMode ? lightTheme : darkTheme)
    return (
        <ThemeProvider theme={slectedTheme}>
            {children}
        </ThemeProvider>
    )
}
