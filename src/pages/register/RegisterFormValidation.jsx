
import * as Yup from "yup";

export const registerFormSchema = Yup.object({
    username : Yup.string()
    .required('Username is require')
    .matches(/^[a-zA-Z][a-zA-Z0-9_]{3,12}$/,'Username must be 3–12 characters and start with a letter.'),

    email : Yup.string()
    .required('Email address is require')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'Enter a valid email address.'),

    password : Yup.string()
    .required('Password i require')
    .matches(/^.{8,}$/,'Password must be at least 8 characters long.'),

    confirm_password : Yup.string()
    .required('Confirm password is require')
    .matches([Yup.ref('password')],'Passwords do not match.'),

    role : Yup.string()
    .required('Role is require')

})