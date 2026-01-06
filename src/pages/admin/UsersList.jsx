import { useEffect, useState } from "react"
import { getAllUsers } from "../../services/usersService"
import UserCard from "../../components/UserCard";
import { useNavigate } from "react-router-dom";

function UsersList() {

    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        async function handleRequest() {
            try {
                const response = await getAllUsers();
                console.log(response);
                setUsers(response);


            } catch (error) {
                setStatus(
                    error?.response?.data?.message || "Can't fetch Users"
                )
            }
        }

        handleRequest();
    },[])

    return <div className="h-full mt-4">
        <button className="mb-4" onClick={() => navigate("/admin")}>Back</button>
        {
            users ? 
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {
                    users.map((user,index) => {
                        return <UserCard key={user.id} user={user} />
                    })
                }
            </div> : <p>{status}</p>
        }
    </div>
}

export default UsersList;