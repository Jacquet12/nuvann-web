import React from "react"
import { Navigate, Route } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
interface PrivateRouteProps {
  path: string;
  element: React.ReactElement;
}


const PrivateRoute = ({ path, element }: PrivateRouteProps ) => {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRoute;
