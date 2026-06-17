import { Route, Routes } from "react-router"
import Chat from "../pages/chat"
import PageNotFound from "../pages/page-not-found"
import Login from "../pages/auth/login"
import PrivateLayout from "../components/layouts/private-layout"
import Register from "../pages/auth/register"

const RouteLists = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateLayout/>}>
                <Route path="/chat" element={<Chat />} />
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default RouteLists
