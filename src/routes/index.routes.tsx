import {Route, BrowserRouter, Routes} from "react-router-dom"
import Login from "../pages/Login";
import Register from "../pages/Register";
import Chat from "../pages/Chat";
const RouterProvider = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/chat" element={<Chat/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterProvider;