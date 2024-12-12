import { ColorModeContext, useMode } from "./styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/dashboard/global/Topbar";



import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";

import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import SidebarLocal from "./scenes/dashboard/global/Sidebar";
import Calendar from "./scenes/dashboard/calendar";

const Layout = () => {
  const [theme, colorMode] = useMode();
  return (
 

<ColorModeContext.Provider value={colorMode}>
<ThemeProvider theme={theme}>
  <CssBaseline />
  <div className="app">
    <SidebarLocal />
    <main className="content">
      <Topbar />
      <Outlet />
    </main>
  </div>
</ThemeProvider>
</ColorModeContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "bar",
        element: <Bar />,
      },
      {
        path: "pie",
        element: <Pie />,
      },
      {
        path: "line",
        element: <Line />,
      },
      {
        path: "geography",
        element: <Geography />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

