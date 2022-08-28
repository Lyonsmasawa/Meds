import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    // .roles?.find(role => allowedRoles?.includes(role)) ? 
  return (
    auth?
        <Outlet />
        : auth?.user ? <Navigate to="/unauthorized" replace state={{ from: location }} />
        : <Navigate to="/login" replace state={{ from: location }} />
  );
}

export default RequireAuth;