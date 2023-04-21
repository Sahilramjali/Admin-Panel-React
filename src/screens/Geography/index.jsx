import Header from "../components/Header"
import GeographyChart from "../components/geographyChart"
import { Box } from "@mui/material"
import { useTheme } from "@mui/material"
import { tokens } from "../../theme"
const Geography=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    return(
        <Box>
            <Header title="GEOGRAPHY" subtitle=""/>
            <Box 
            height="75vh"
            border={`1px solid ${colors.grey[100]}`}
            borderRadius='4px'
            >
                <GeographyChart/>
            </Box>
        </Box>
    )
}
export default Geography