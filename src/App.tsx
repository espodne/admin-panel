import React, { Suspense } from "react";
import { ColorModeContext, useMode } from "./styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/dashboard/global/Topbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SidebarLocal from "./scenes/dashboard/global/Sidebar";

const Dashboard = React.lazy(() => import("./scenes/dashboard"));
const Team = React.lazy(() => import("./scenes/team"));
const Contacts = React.lazy(() => import("./scenes/contacts"));
const Invoices = React.lazy(() => import("./scenes/invoices"));
const Form = React.lazy(() => import("./scenes/form"));
const FAQ = React.lazy(() => import("./scenes/faq"));
const Bar = React.lazy(() => import("./scenes/bar"));
const Pie = React.lazy(() => import("./scenes/pie"));
const Line = React.lazy(() => import("./scenes/line"));
const Geography = React.lazy(() => import("./scenes/geography"));
const Calendar = React.lazy(() => import("./scenes/calendar"));

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
            <Suspense fallback={<div>Загрузка...</div>}>
              <Outlet />
            </Suspense>
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