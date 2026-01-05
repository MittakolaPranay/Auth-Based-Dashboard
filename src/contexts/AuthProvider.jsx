import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({children}){

    const [auth, setAuth] = useState({
        user : null,
        loading : true
    })
  
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("auth"));

        if(storedData) {
            setAuth({
                user : storedData,
                loading : false
            })
        } else {
            setAuth({
                user : null,
                loading : false
            })
        }
    },[]);
    

    const login = (userInfo) => {
        localStorage.setItem("auth",JSON.stringify(userInfo));
        setAuth({
            user : userInfo,
            loading : false
        })
    }

    const logout = () => {
    
        localStorage.removeItem("auth");

        setAuth({
            user : null,
            loading : false
        })
    }

    const values = {
        auth,
        isAuthenticated : !!auth.user,
        loading : auth.loading,
        login,
        logout
    }

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;