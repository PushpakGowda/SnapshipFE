import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { type RootState } from "../Redux/Store";

export const ProtectedRoute = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuth ? <Outlet /> : <Navigate to="/Login" replace />;
};
