import api from "./api"

 export const getAllUsers = async () =>  {
    const response = await api.get("/users");
    return response.data;
}

export const getUser = async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
}

export const editUser = async (id,data) => {
    
    const response = await api.patch(`/users/${id}`,data)
    return response.data;
}

export const editAdmin = async (id, data) => {
    
    const response = await api.put(`/users/${id}`,data);
    return response.data;
}
