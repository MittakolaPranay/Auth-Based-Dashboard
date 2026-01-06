import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import PageLoader from "../components/PageLoader";


function RouterProtector({ allowedRoles, children }) {

    const { user, isAuth, loading } = useAuth();


    if(loading) return <PageLoader/>

    if(!isAuth) return <Navigate to={"/"}/>

    if(!allowedRoles.includes(user.role)) return <Navigate to={"/unauthorized"}/>

    return children
}

export default RouterProtector;