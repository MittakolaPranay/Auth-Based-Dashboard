import { loginAPI } from "./server";

export async function callLoginAPI(loginInfo) {
    try {
        const response = await loginAPI(loginInfo);

        if(response.status) {
            return response;
        } 
    } catch (error) {
        return error
    }
}