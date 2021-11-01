import React from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import LinkTab from './Tabs'

export default function Header() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: '#66b1ff' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Contests
                    </Typography>
                    <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                        <LinkTab label="competitions" to="/competition" />
                        <LinkTab label="users" to="/users" />
                        <LinkTab label="create contest" to="/create" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </Box >
    )
}
