import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import PageLoader from "../components/PageLoader";


function RouterProtector({ allowedRoles, children }) {

    const { auth, isAuthenticated, loading } = useAuth();


    if(loading) return <PageLoader/>

    if(!isAuthenticated) return <Navigate to={"/"}/>

    if(!allowedRoles.includes(auth.user.role)) return <Navigate to={"/unauthorized"}/>

    return children
}

export default RouterProtector;