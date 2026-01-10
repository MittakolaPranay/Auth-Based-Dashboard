import api from "./api";  
  
export  const fetchData = async (currentPage) => {
    const response = await api.get(`/orders?page=${currentPage}`);
    console.log(response.data)
    return response.data;
  };