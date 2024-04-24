import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import { useEffect, useState } from 'react';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

import { List, ListItem, ListItemButton, ListItemText }  from '@mui/material';
import MenuDrawer from './MenuDrawer';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
    const { loginUser, login, logout } = useAuth()
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMenuOpen((prev) => !prev);
    }

    const navigate = useNavigate();
    const [menus, setMenus] = useState([
        {path: "/signup", label: "회원가입"},
        {path: "/post", label: "타임라인"},
        {path: "/search", label: "검색"},
    ]);

    useEffect(() => {
        if (loginUser) {
            setMenus([
                { path: '/post', label: "게시물" },
                { path: '/search', label: "검색" },
                { path: '/profile', label: "프로필" },
            ]);
        } else {
            setMenus([
                { path: '/signup', label: "회원가입" },
                { path: '/post', label: "게시물" },
                { path: '/search', label: "검색" },
            ]);
        }
    }, [loginUser])

    const goToMenu = (path) => {
        navigate(path)
    }

    return (
        <>
            <AppBar position="static" color="mainColor" elevation={0}>
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <IconButton 
                        aria-label="메뉴" 
                        color="bgColor2"
                        onClick={handleDrawerToggle}
                        sx={{display: {sm: 'none'}}}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{display: { xs:'none', sm: 'block', cursor: 'pointer'}}}>
                        <LocalFloristIcon 
                            color="bgColor2"
                            onClick={() => goToMenu('/')}
                        />
                    </Box>

                    <Box sx={{display: {xs: 'none', sm:'block'}}}>
                        {
                            menus.map((m, idx) => (
                                <Button
                                    variant="text"
                                    color="bgColor2"
                                    onClick={() => goToMenu(m.path)}
                                >{m.label}</Button>
                            ))
                        }
                    </Box>
                </Toolbar>
            </AppBar>

            <MenuDrawer  menuOpen={menuOpen} handleDrawerToggle={handleDrawerToggle}>
                <List>
                    {
                        menus.map((m, idx) => (
                            <ListItem key={idx}>
                                <ListItemButton
                                    sx={{textAlign:"center"}}
                                    onClick={() => goToMenu(m.path)}
                                >
                                    <ListItemText primary={m.label}/>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </MenuDrawer>

        </>
    );
}

export default Header;