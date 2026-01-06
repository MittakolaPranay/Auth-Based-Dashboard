import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({children}){

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading,setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
  
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("user"));
        const storedToken = JSON.parse(localStorage.getItem("token"));
    
        if(storedData && storedToken) {
            setUser(storedData);
            setToken(storedToken);
            setIsAuth(true);
        } 

        setLoading(false)
    },[]);
    

    const login = (data) => {
        const user = data.user;
        const token = data.token;

        setUser(user);
        setToken(token);
        setIsAuth(true);

        localStorage.setItem("user",JSON.stringify(user));
        localStorage.setItem("token",JSON.stringify(token))
    }

    const logout = () => {

        setUser(null);
        setToken(null);
        setIsAuth(false);

        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    const values = {

        user,
        token,
        isAuth,
        loading,
        login,
        logout
    }

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;