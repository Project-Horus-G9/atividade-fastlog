import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.jsx";

const Home = lazy(() => import("./pages/Home/index.jsx"));
const Login = lazy(() => import("./pages/Login/index.jsx"));


function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
