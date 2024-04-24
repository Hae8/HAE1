import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Main = ({children}) => {
    return (
        <Box>
            <Grid
                container
                my={3}
                spacing={1}
                direction="column"
                justify="center"
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