import React, { useState } from 'react'
import { Container, Box, IconButton, Button, Toolbar, AppBar } from '@mui/material';
import { useHistory } from 'react-router';
import ThemeSwitch from '../UI/Switch';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './Header.scss'

export default function Header() {
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const history = useHistory()

    const toggleMenu = () => {
        if (isActiveMenu) {
            setIsActiveMenu(false)
        } else {
            setIsActiveMenu(true)
        }
    }

    return (
        <>
            <Box>
                <AppBar position="static" sx={{ backgroundColor: '#032541', color: '#fff' }}>
                    <Container>
                        <Toolbar className='header' style={{ padding: 0, display: 'flex', justifyContent: 'space-between' }} >
                            <Box>
                                <ThemeSwitch />
                            </Box>

                            <nav style={{ display: 'flex' }}>
                                <div className="menu__burger">
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        onClick={toggleMenu}
                                        sx={{ m: 0 }}
                                    >
                                        <MenuIcon />

                                    </IconButton>
                                </div>

                                <ul className={isActiveMenu ? 'menu menu__active' : 'menu'}>
                                    {localStorage.getItem('session_id') ?
                                        <>
                                            <li onClick={() => { history.push('/movies') }}>Movie</li>
                                            <li onClick={() => { history.push('/favorites') }}>Favorites</li>
                                            <IconButton
                                                size="large"
                                                edge="end"
                                                aria-label="account of current user"
                                                aria-haspopup="true"
                                                color="inherit"
                                                onClick={() => { history.push('/userinformation') }}
                                            >
                                                <AccountCircle />
                                            </IconButton>
                                        </>
                                        :
                                        <>
                                            <Box>

                                                <Button color="inherit" onClick={() => { history.push('/login') }}>Login</Button>
                                                <Button color="inherit" onClick={() => { history.push('/signup') }}>Sign up</Button>
                                            </Box>
                                        </>
                                    }
                                </ul>
                            </nav>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </>
    )
}
