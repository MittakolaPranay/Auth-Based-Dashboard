import { users } from "../constants/data";

export async function loginAPI(formData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user) => {
                if(user.username === formData.username && user.password === formData.password) {
                    return user;
                }
            });

            if(!user) {
                reject({
                    status : false,
                    message : 'Invalid credentials'
                })
            } else {
                resolve({
                    status : true,
                    username : user.username,
                    email : user.email,
                    role : user.role
                })
            }
        }, 3000)
    })
}