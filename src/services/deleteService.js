import api from "./api";

async function deleteUser(userId) {
    const response = await api.delete(`/users/${userId}`);
    return response.data
}

export default deleteUser;