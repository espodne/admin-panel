import GeoChart from "../../components/GeoChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import { tokens } from "../../styles/theme";
import { useTheme } from "@mui/material";

const GeoMap = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <GeoChart />
      </Box>
    </Box>
  );
};

export default GeoMap;
