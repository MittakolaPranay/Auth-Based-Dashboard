import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { getUser } from "../../services/usersService";
import UserCard from "../../components/UserCard";
import { useNavigate } from "react-router-dom";

function UserDetails() {
    
    const [userDetails, setUserDetails] = useState(null);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
    
        async function handleRequest() {
            try {
                const userDetails = await getUser(user.id)
                setUserDetails(userDetails);
            } catch (error) {
                alert(error?.response?.data?.message);
            }

        }
        handleRequest();
    },[])

    return <div className="mt-2  md:mt-4 lg:mt-8 flex justify-center items-center flex-col">
        <button onClick={() => navigate("/user")}>Back</button>
        <h1>Your Details</h1>
        {
            userDetails ? <UserCard user={userDetails}/> : <p>Connot fetch your details</p>
        }
    </div>
}

export default UserDetails;