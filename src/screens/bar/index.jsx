import BarChart from "../components/barChart";
import { Box } from "@mui/material";
import Header from "../components/Header";
const Bar=()=>{
    
    return <Box m="20px">
        <Header title="BARCHART" subtitle="Simple Bar chart"/>
       <Box height="75vh">
       <BarChart/>
       </Box>
    </Box>
}
export default Bar;