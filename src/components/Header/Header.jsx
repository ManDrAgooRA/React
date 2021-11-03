import React, { useState } from 'react'
import { Container, Box, IconButton, Button, Typography, Toolbar, AppBar } from '@mui/material';
import { useHistory } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './Header.scss'
import { useSelector } from 'react-redux';

export default function Header() {
    const { isLoggedIn } = useSelector((state) => state.user)
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
                            <div className="logo">
                                <Typography variant="h6" component="a" >
                                    Photos
                                </Typography>
                            </div>

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
                                    {isLoggedIn ?
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
