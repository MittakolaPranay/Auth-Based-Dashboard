import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import Loading from "../components/Loading";

function AdminRouterProtector({ children }) {

    const { auth, isAuthenticated, loading } = useAuth();


    if(loading) return <Loading />

    if(!isAuthenticated) return <Navigate to={"/"}/>

    if(auth.user.role !== "admin") return <Navigate to={"/unauthorized"}/>

    return children
}

export default AdminRouterProtector;