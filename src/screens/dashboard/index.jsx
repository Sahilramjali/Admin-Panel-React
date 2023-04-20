import { Box } from "@mui/material";
import Header from "../components/Header";

const DashBoard = () => {
  return (
    <Box>
      <Box display="flex" justifyCon
      ="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};
export default DashBoard;
