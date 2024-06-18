import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import { isAuthenticated } from "../utils/isAuthenticated";

const RequireAuth = () => {
  // const { auth } = useAuth();
  const location = useLocation();

  const isAuthenticatedStatus = isAuthenticated();

  return isAuthenticatedStatus ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
