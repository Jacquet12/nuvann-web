import { ReactElement } from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { ComponentType } from "react";


interface PrivateRouteProps {
  component: ComponentType<any>;
  path: string;
}

export function PrivateRoute({ component: Component, ...rest }: PrivateRouteProps) {
  const { isAuthenticated } = useAuthContext();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/login" replace />}
    />
  );
}
