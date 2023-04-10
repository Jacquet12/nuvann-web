import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login  from "../pages/Login";
import Home from "../pages/Home";
import { useAuthContext } from "../context/authContext";
import Promotion from "../pages/Promotion";
import Categories from "../pages/Categories";
import NotFound from "../pages/NotFound";
import Detail from "../pages/Details";


function CheckAuth({ children }: any) {
  const location = useLocation();
  const { token } = useAuthContext();
  const authenticate = !!token;
  return authenticate ? children : <Navigate to={{pathname: "/login"}} state={location.pathname} replace />
}

export function PrincipalRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/products/:id" element={<Detail />} />
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
