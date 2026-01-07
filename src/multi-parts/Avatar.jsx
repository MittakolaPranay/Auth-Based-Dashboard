import { Formik } from "formik";
import AvatarForm from "./AvatarForm";
import { validationSchema } from "./AvatarValidation";
import { uploadAvatar } from "../services/imageService";

function Avatar() {
    return <Formik
    initialValues={{
        avatar : null
    }}
    validationSchema={validationSchema}
    onSubmit={async (values) => {
        
        await uploadAvatar(values.avatar);
    }}
    >
        {
            ({ values, setFieldValue, errors, touched }) => {
                return <AvatarForm values={values} setFieldValue={setFieldValue} errors={errors} touched={touched}/>
            }
        }
    </Formik>
}

export default Avatar;