import { Form } from "formik"
import { useEffect, useState } from "react";

function AvatarForm({values, setFieldValue, errors, touched}) {

    const [preview, setPreview] = useState(null);

    useEffect(() => {

        if(!values.avatar) {
            setPreview(null);
            return;
        }
        const url = URL.createObjectURL(values.avatar);
        setPreview(url)
        return () => {
            URL.revokeObjectURL(values.avatar);
        }

    },values.avatar)

    return <Form>
        <input type="file" name="avatar" onChange={(e) => setFieldValue("avatar",e.currentTarget.files[0])} />
        {
            errors.avatar &&
            touched.avatar && 
            <p className="text-red-700">{errors.avatar}</p>
        }
        {
            preview && <img className="w-28" src={preview} alt="preview" />
        }
        <button type="submit">Submit</button>
    </Form>
}

export default AvatarForm;