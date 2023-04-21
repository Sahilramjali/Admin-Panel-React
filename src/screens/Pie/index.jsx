import PieChart from "../components/pieChart";
import { Box } from "@mui/material";
import Header from "../components/Header";
const Pie=()=>{
    
    return <Box m="20px">
        <Header title="PIECHART" subtitle="Simple Pie chart"/>
       <Box height="75vh">
       <PieChart/>
       </Box>
    </Box>
}
export default Pie;