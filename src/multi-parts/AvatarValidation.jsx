
import * as Yup from "yup";

export const validationSchema = Yup.object({
    avatar : Yup.mixed()
    .required("File is required")
    .test(
        "fileSize",
        "Max Size of file should be 2MB",
        value => {
            if(!value) return false
            return value.size <= 2 * 1024 * 1024
        }
    )

    .test(
        "fileType",
        "Only jpeg and png files are allowed",
        value => {
            if(!value) return false
            return ["image/jpeg","image/png"].includes(value.type);
        }
    )
})