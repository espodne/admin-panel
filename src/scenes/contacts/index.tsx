import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar} from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { tokens } from "../../styles/theme";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.2
    },
    {field: "registrarId", headerName: "Registrar ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.5
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 0.5,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 0.5,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="10px auto"
            p="5px"
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor: `${
                access === "admin"
                  ? colors.greenAccent[600]
                  : access === "manager"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[800]
              }`,
              borderRadius: "4px",
            }}
          >
           
            <Typography color={colors.grey[100]} ml="5px">
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
      </Box>
      <Box m="15px 0 0 0" height="68vh" sx={{
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
        
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`
          }
        
      }}> 
      
        <DataGrid rows={mockDataContacts} columns={columns} slots={{toolbar: GridToolbar}}/>
      </Box>
    </Box>
  );
};

export default Contacts;
