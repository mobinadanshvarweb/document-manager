import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import Login from "../pages/login/Login";
import SignUp from "../pages/login/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";
import Document from "../pages/document/Document";
import Setting from "../pages/setting/Setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Layout /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/document", element: <Document /> },
      { path: "/setting", element: <Setting /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/sginup", element: <SignUp /> },
]);

export default router;
