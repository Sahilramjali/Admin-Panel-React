import LineChart from "../components/lineChart"
import { Box } from "@mui/material"
import Header from "../components/Header";
const Line=()=>{
    return(
        <Box>
        <Header title="LINECHART" subtitle="Line chart of some data"/>
        <Box 
        height="75vh"
        >
            <LineChart/>
        </Box>
        </Box>
        
    );
}
export default Line;