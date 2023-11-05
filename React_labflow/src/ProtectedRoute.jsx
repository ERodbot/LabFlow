import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/auth";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading} = useAuth();
  console.log(isAuthenticated)

  if(loading) return <h1></h1>;
  if (!isAuthenticated) return <Navigate to="/iniciar_sesion" replace />;
  return <Outlet />;
};
