import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Login  from "../pages/Login";
import Home from "../pages/Home";
import {Cart} from "../pages/Cart";

export function PrincipalRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/cart" element={<PrivateRoute element={<Cart />} />} /> */}
        {/* <PrivateRoute path="/cart" element={<Cart />}/> */}
      </Routes>
  );
}
