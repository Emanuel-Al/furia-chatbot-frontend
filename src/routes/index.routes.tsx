import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Chat from "../pages/Chat/Chat";
import Home from "../pages/Home/Home";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
