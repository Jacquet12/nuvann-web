import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoutes";
import Login  from "../pages/Login";
import Home from "../pages/Home";

export function PrincipalRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <PrivateRoute path="/" component={Home} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
