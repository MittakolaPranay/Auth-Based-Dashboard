import { Form, Formik, Field } from "formik";
import { NavLink } from "react-router-dom";
import { registerFormSchema } from "./RegisterFormValidation";

function RegisterPage() {
    return <div className="app">
        <Formik 
        initialValues={{
            username : '',
            email : '',
            password : '',
            confirm_password : ''
        }}
        validationSchema={ registerFormSchema}
        onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
        }}
        >
            {
                ({ errors, touched }) => (
                    <Form className="form">
                        <h1 className="text-center text-2xl md:text-4xl my-4">Register your account</h1>
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
                            <label htmlFor="email">Email:</label>
                                <Field 
                                className="input-field"
                                name="email" 
                                id="email"
                                />
                        
                            {errors.email && 
                            touched.email &&
                            <p className="text-red-700">{errors.email}</p>
                            }
                        </div>

                        <div className="field">
                            <label htmlFor="password">Password:</label>
                                <Field 
                                className="input-field"
                                name="password" 
                                id="password"
                                />
                        
                            {errors.password && 
                            touched.password &&
                            <p className="text-red-700">{errors.password}</p>
                            }
                        </div>

                        <div className="field">
                            <label htmlFor="confirm_password">Confirm password:</label>
                                <Field 
                                className="input-field"
                                name="confirm_password" 
                                id="confirm_password"
                                />
                        
                            {errors.confirm_password && 
                            touched.confirm_password &&
                            <p className="text-red-700">{errors.confirm_password}</p>
                            }
                        </div>

                        <div className="field">

                            <Field as="select" name="role" className="input-field">
                                <option  value="">Select role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </Field>

                            {errors.role && 
                            touched.role &&
                            <p className="text-red-700">{errors.role}</p>
                            }
                        </div>

                        <button>Sign up</button>

                        <span className="text-center">Already have an account? <NavLink to={"/"}>Signin</NavLink></span>
                    </Form>
                )
            }
    </Formik>
    </div>

}

export default RegisterPage;