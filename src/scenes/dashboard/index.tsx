import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadDoneOutlined from "@mui/icons-material/DangerousOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeoChart from "../../components/GeoChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";


const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
