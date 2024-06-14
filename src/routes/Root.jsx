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
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },

      // Private paths
      {
        element: <RequireAuth />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
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
