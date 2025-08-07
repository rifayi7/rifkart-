import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/ProtectPage";

export default function PrivateRoute() {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
