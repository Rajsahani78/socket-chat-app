import { Navigate, Outlet } from "react-router"

const PrivateLayout = () => {
    const token = localStorage.getItem('token')
    return (
        token ? <Outlet /> : <Navigate to={'/login'} />
    )
}
export default PrivateLayout