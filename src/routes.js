import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;