import api from "./api";

export async function getProducts(pageNum) {
    const response = await api.get(`/products?page=${pageNum}`);
    console.log(response.data);
    return response.data;
}
