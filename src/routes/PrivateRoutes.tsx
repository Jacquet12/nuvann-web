import React from "react"
import { Route, Routes } from "react-router-dom";
import { Cart } from "../pages/Cart";
import NotFound from "../pages/NotFound";
import Seller from "../pages/Seller";

const PrivateRoute: React.FC = () => {
  return (
  <Routes>
    <Route path="/cart" element={<Cart />} />
    <Route path="/seller" element={<Seller />} />
    <Route path="/*" element={<NotFound />} />

  </Routes>
  )
}

export default PrivateRoute;
