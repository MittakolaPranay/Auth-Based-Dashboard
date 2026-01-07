import { Form, Formik, Field } from "formik";
import { useAuth } from "../../hooks/useAuth";
import { editUser } from "../../services/usersService";
import { useNavigate } from "react-router-dom";
function EditDetails() {

    const { user, editUserProfile } = useAuth();
    const navigate = useNavigate();

    const initialValues = {
        username : user ? user.username : '',
        email : user ? user.email : ''
    }

    return <div className="app">
        <Formik
        initialValues={initialValues}
        onSubmit={ async (values) => {

            let request = {};

            if(values.username !== user.username) {
                request.username = values.username;
            }

            if(values.email !== user.email) {
                request.email = values.email;
            }

            if(Object.keys(request).length === 0) {
                alert("No changes detected");
                return
            }

            try {
                const response = await editUser(user.id,request);
                editUserProfile(response.user);
                alert(response.message);
                navigate("/user");
            } catch (error) {
                alert(error?.response?.data?.message)
            }
        }}
        >
            {
                ({ errors, touched }) => (
                    <Form className="form">
                        <h1 className="text-center text-2xl md:text-4xl my-4">Edit Your Profile</h1>
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
                            <label htmlFor="username">Email:</label>
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

                        <button type="submit">Edit Profile</button>                       
                    </Form>
                )
            }
        </Formik>
    </div>
}

export default EditDetails;