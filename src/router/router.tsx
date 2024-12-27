import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import Login from "../pages/login/Login";
import SignUp from "../pages/login/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "dashboard", element: <Layout /> }],
  },
  { path: "/login", element: <Login /> },
  { path: "/sginup", element: <SignUp /> },
]);

export default router;
