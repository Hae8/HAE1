import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box';

const MenuDrawer = ({menuOpen, handleDrawerToggle, children}) => {
    return (
        <nav>
            <Drawer
                variant="temporary"
                anchor="left"
                open={menuOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs:'block', sm:'none'},
                    '& .MuiDrawer-paper' : {
                        boxSizing:'border-box', 
                        width:240,
                        bgcolor: "bgColor2"
                    }
                }}
            >
                <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>
                    <Typography variant="h6" sx={{my: 2}}>
                        레이아웃 샘플
                    </Typography>
                    <Divider />
                    {children}
                </Box>
            </Drawer>
        </nav>
    );
}

export default MenuDrawer;
