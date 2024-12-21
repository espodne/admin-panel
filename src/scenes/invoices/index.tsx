import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { tokens } from "../../styles/theme";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.2,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography sx={{ margin: "15px 0" }} color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="INVOICES" subtitle="List of Invoice Balances" />
      </Box>
      <Box
        m="15px 0 0 0"
        height="68vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[800],
          },
          "& .MuiTablePagination-root": {
            backgroundColor: colors.blueAccent[800],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
