
import * as Yup from "yup";

export const loginFormSchema = Yup.object({
    username : Yup.string()
    .required('Username is require')
    .matches(/^[a-zA-Z][a-zA-Z0-9_]{3,12}$/,'Username must be 3–12 characters'),

    password : Yup.string()
    .required('Password is require')
    .matches(/^.{8,}$/,'Password must be at least 8 characters long.')

})