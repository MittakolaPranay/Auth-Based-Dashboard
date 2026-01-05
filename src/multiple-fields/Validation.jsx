
import * as Yup from "yup"

export const Validationschema = Yup.object({
    employees : Yup.array()
    .of(
        Yup.object({
            employeeName : Yup.string()
            .required("Employee name is required"),

            employeeSalary : Yup.number()
            .required("Employee salary is required")
            .positive("Salary must be greater than 0")
            .typeError("Salary must be a number")
        })
    )
    .min(1,"At least one employee is required ")
})