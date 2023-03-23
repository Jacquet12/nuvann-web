import React from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { Cart } from "../pages/Cart";
interface PrivateRouteProps {
  path?: string;
  element: React.ReactElement<any>;
}


const PrivateRoute: React.FC = () => {
  return (
  <Routes>
    <Route path="/cart" element={<Cart />} />
  </Routes>
  )
}

export default PrivateRoute;
