import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Main = ({children}) => {
    return (
        <Box>
            <Grid
                container
                width="65%"
                margin= "100px auto"
                spacing={1}
                direction="column"
                justify="center"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="nowrap"
            >
                {children}
            </Grid>
        </Box>
    );
}

export default Main;