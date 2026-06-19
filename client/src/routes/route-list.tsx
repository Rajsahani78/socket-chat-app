import { Navigate, Route, Routes } from "react-router"
import Chat from "../pages/chat"
import PageNotFound from "../pages/page-not-found"
import Login from "../pages/auth/login"
import PrivateLayout from "../components/layouts/private-layout"
import Register from "../pages/auth/register"
import Profile from "../pages/profile"

const RouteLists = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateLayout/>}>
            <Route index element={<Navigate to="/chat" replace />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default RouteLists
