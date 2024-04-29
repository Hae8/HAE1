import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from 'react';
import DiamondIcon from '@mui/icons-material/Diamond';

import { Button, List, ListItemButton, Typography }  from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const drawerWidth = 240;

const Header = () => {
    
    const { loginUser, login, logout } = useAuth()
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [menus, setMenus] = useState([
        {path: "/signup", label: "회원가입"},
        {path: "/post", label: "타임라인"},
        {path: "/search", label: "검색"},
    ]);

    useEffect(() => {
        if (loginUser?.id) {
            setMenus([
                { path: '/post', label: "타임라인" },
                { path: '/search', label: "검색" },
                { path: '/profile', label: "프로필" },
                { path: '/logout', label: "로그아웃" },
            ]);
        } else {
            setMenus([
                { path: '/', label: "로그인" },
                { path: '/signup', label: "회원가입" },
                { path: '/post', label: "게시물" },
                { path: '/search', label: "검색" },
            ]);
        }
    }, [loginUser])

    const goToMenu = (path) => {
        navigate(path)
    }

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
        setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <Toolbar sx={{display: {cursor: 'pointer'}}}>
                <DiamondIcon 
                    color="mainColor"
                    onClick={() => goToMenu('/')}
                />
            </Toolbar>
            <Divider />
            <List style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
                {
                    menus.map((m, idx) => (
                    <ListItemButton
                        key={idx}
                        variant="text"
                        color="fontColor"
                        onClick={
                            m.path === '/logout' ?
                            () => logout( () => { goToMenu('/') } )
                            :
                            () => goToMenu(m.path)
                        }
                    >{m.label}</ListItemButton>
                ))
            }
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
            position="fixed"
            sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            }}
            color="mainColor"
        >
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" style={{color: '#f2f2f2'}}>
                Skeleton SNS
            </Typography>
            </Toolbar>
        </AppBar>
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
                keepMounted: true, 
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
            <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
            >
            {drawer}
            </Drawer>
        </Box>
        </Box>
    );
    }

    export default Header;