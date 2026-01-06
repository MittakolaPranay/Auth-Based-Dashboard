import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import { loginFormSchema } from "./LoginFormValidations";
import { loginService } from "../../services/authService";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {

    const { login } = useAuth();
    const navigate = useNavigate();
    const [status, setStatus] = useState(null);

    const initialValues = {
        username : '',
        password : '',
        remember : false
    }
    return <div  className="app">
        <Formik
        initialValues={initialValues}
        validationSchema={loginFormSchema}
        onSubmit={ async (values, { resetForm }) => {
            try {
                const response = await loginService(values);
                
                login(response);

                if(response.user.role === "admin") navigate("/admin");
                else navigate("/user");

                resetForm();
            } catch (error) {
                setStatus(
                    error.response?.data?.message || "Login failed"
                )
            }
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

        {status && <p className="text-red-800">{status}</p>}
    </div>
}

export default LoginPage;