import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import AttendancePage from "../pages/AttendancePage";
import RequireAuth from "../components/RequireAuth";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      // Public paths
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },

      // Private paths
      {
        element: <RequireAuth />,
        children: [
          {
            path: "/profile",
            element: <ProfilePage />,
          },
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/attendance",
            element: <AttendancePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
