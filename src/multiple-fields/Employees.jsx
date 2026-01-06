import { Field, FieldArray, Form, Formik } from "formik";
import { Validationschema } from "./Validation";
import { validateDuplicates } from "./DuplicateValidation";

function Employees() {
    return <Formik 
    initialValues={{
        employees : [
            { 
                employeeName : '', 
                employeeSalary : ''
            }
        ]
    }}
    validate={validateDuplicates}
    validationSchema={Validationschema}
    onSubmit={(values) => {
        console.log(values);
    }}
    >
        {
            ({ values, errors, touched }) => (
                <Form className="h-screen w-screen flex justify-center items-center flex-col ">
                    <h1>Multiple Employees</h1>
                    <FieldArray name="employees">
                        {
                        ({push, remove}) => (
                            <>
                            { values.employees.map((_, index) => {
                                return <div key={index}>
                                    <h1>Employee {index + 1}</h1>

                                    <div>
                                        <label 
                                        htmlFor={`employees.${index}.employeeName`}
                                        >
                                            Employee Name : 
                                        </label>

                                        <Field 
                                        type="text" 
                                        name={`employees.${index}.employeeName`}
                                        id={`employees.${index}.employeeName`}
                                        />

                                        {
                                            errors.employees?.[index]?.employeeName &&
                                            touched.employees?.[index]?.employeeName &&
                                            <p className="text-red-700">{errors.employees?.[index].employeeName}</p>
                                        }
                                    </div>

                                    <div>
                                        <label 
                                        htmlFor={`employees.${index}.employeeSalary`}
                                        >
                                            Employee Salary : 
                                        </label>

                                        <Field 
                                        type="number" 
                                        name={`employees.${index}.employeeSalary`}
                                        id={`employees.${index}.employeeSalary`}
                                        />
                                        {
                                            errors.employees?.[index]?.employeeSalary &&
                                            touched.employees?.[index]?.employeeSalary &&
                                            <p className="text-red-700">{errors.employees?.[index].employeeSalary}</p>
                                        }
                                    </div>
                                    {index !== 0 ? <button type="button" onClick={() => remove(index)}>X</button> : null}
                                </div>
        
                            })}
                            <button 
                            type="button"
                            onClick={()  => push({employeeName : '', employeeSalary: ''})}
                            >
                                + Add
                            </button>
                            </>
                        )
                    }
                    </FieldArray>

                    <button type="submit">Submit</button>
                </Form>
            )
        }
    </Formik>
}

export default Employees;