import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login  from "../pages/Login";
import Home from "../pages/Home";
import { useAuthContext } from "../context/authContext";


function CheckAuth({ children }: any) {
  const location = useLocation();
  const { token } = useAuthContext();
  const authenticate = !!token;
  return authenticate ? children : <Navigate to={{pathname: "/login"}} state={{from: location.pathname}} replace />
}

export function PrincipalRoutes() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/*" 
          element={
            <CheckAuth>
              <PrivateRoutes />
            </CheckAuth>
          }
        />
      </Routes>
  );
}
