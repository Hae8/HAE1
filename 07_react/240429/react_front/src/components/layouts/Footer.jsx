import axios from "axios";
import { useEffect, useState } from "react";

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ListItem, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Footer = () => {
    const navigate = useNavigate();
    const [hashtags, setHashtags] = useState();
    const getHashtags = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/hashtags`)
        if (res.data.code === 200) {
            setHashtags(res.data.payload)
        }
    }
    useEffect(() => {
        getHashtags();
    },[])

    return (
        <Box sx={{ display: { xs:'none', sm: 'none', md:'none', lg: 'flex' }}}>
        <CssBaseline />
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="permanent"
            anchor="right"
        >
            <Toolbar>
                <Typography> 🔥인기 급상승 해시태그</Typography>
            </Toolbar>
            <Divider />
            <List style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
            {
                hashtags && hashtags.map((p, idx) =>(
                        <ListItemButton
                            key={idx}
                            onClick={() => {
                                navigate(`/search?hashtag=${p.title}`);
                            }}
                        >
                            <Typography style={{display:"flex", marginRight: "20px", color:"#7F6DF2" }}>{idx + 1}</Typography>
                            <Typography style={{display:"flex"}}>{p.title}</Typography>
                        </ListItemButton>
                ))
            }
            </List>
        </Drawer>
        </Box>
    );
    }

    
export default Footer;