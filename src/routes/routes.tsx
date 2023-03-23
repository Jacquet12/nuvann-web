import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login  from "../pages/Login";
import Home from "../pages/Home";
import { useAuthContext } from "../context/authContext";


function CheckAuth({ children }: any) {
  const { token } = useAuthContext();
  const authenticate = !!token;
  return authenticate ? children : <Navigate to="/login" replace />
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
