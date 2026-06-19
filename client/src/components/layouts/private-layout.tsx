import { Navigate, Outlet } from "react-router"
import { useGetProfileQuery } from "../../services/user"
import { useEffect } from "react";
import socket from "../../socket";

const PrivateLayout = () => {
    const token = localStorage.getItem('token')
    const { data: profileData } = useGetProfileQuery();
    useEffect(() => {
        if (profileData?.data?._id) {
            const currentUserId = profileData.data._id;
            socket.auth = { userId: currentUserId };
            socket.connect();
        }

        return () => {
            socket.disconnect();
        };
    }, [profileData]);

    return (
        token ? <Outlet /> : <Navigate to={'/login'} />
    )
}
export default PrivateLayout