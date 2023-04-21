import { Box,Typography } from "@mui/material"

const NotFound=()=>{
    return(
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        >
            <Typography variant="h1">
                404 Page Not Found
            </Typography>
        </Box>
    )
}

export default NotFound