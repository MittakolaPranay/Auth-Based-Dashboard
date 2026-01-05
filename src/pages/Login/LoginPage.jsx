import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import { loginFormSchema } from "./LoginFormValidations";
import { callLoginAPI } from "../../services/callLoginAPI";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const { login } = useAuth();
    const navigate = useNavigate();


    return <div  className="app">
        <Formik
        initialValues={{
            username : '',
            password : '',
            remember : false
        }}
        validationSchema={loginFormSchema}
        onSubmit={ async (values, { resetForm }) => {

            const response = await callLoginAPI(values);

            if(response.status) {
                login({
                    username : response.username,
                    email : response.email,
                    role : response.role,
                });
                if(response.role === "admin") {
                    navigate("/admin")
                } else if (response.role === "user") {
                    navigate("/user");
                }
            } else {
                alert(response.message);
            }

            resetForm();
        }}
        >
            {
                ({ errors, touched, isSubmitting}) => (
                    <Form className="form">
                        <h1 className="text-center text-2xl md:text-4xl my-4">Login your account</h1>
                        <div className="field">
                            <label htmlFor="username">User Name:</label>
                            <Field 
                            className="input-field"
                            name="username" 
                            id="username"
                            />

                            {errors.username && 
                             touched.username &&
                             <p className="text-red-700">{errors.username}</p>
                            }
                        </div>

                        <div className="field">
                            <label htmlFor="password">Password:</label>
                            <Field 
                            className="input-field"
                            type="password"
                            name="password" 
                            id="password"
                            />

                            {errors.password && 
                             touched.password &&
                             <p className="text-red-700">{errors.password}</p>
                            }
                        </div>

                        <div className="flex justify-between">
                            <div className="flex gap-3">
                               <Field 
                               type="checkbox"
                               name="remember" 
                               id="remember"
                               />
                               <label htmlFor="remember">Remember me:</label>
                            </div>

                            <div>
                                <NavLink>Forgot password?</NavLink>
                            </div>
                        </div>

                        <button type="submit">{isSubmitting ? "Submitting..." : "Login"}</button>

                        <span className="text-center">Don't have an account? <NavLink to={"/register"} >Signup</NavLink></span>
                    </Form>
                )
            }
        </Formik>
    </div>
}

export default LoginPage;