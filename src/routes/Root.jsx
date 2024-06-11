import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import TestPage from "../pages/TestPage";
import RequireAuth from "../components/RequireAuth";
import Layout from "../components/Layout";

// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/register",
//     element: <RegisterPage />,
//   },
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/profile",
//     element: <ProfilePage />,
//   },
//   {
//     path: "/test",
//     element: <TestPage />,
//   },
// ]);

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
      {
        path: "/test",
        element: <TestPage />,
      },

      // Private paths
      {
        element: <RequireAuth />, // Wrap private routes with RequireAuth
        children: [
          {
            path: "/profile",
            element: <ProfilePage />,
          },
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
