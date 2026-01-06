
export const validateDuplicates = ( values ) => {
    const errors = {};
    const nameMap = {};

    values.employees.forEach((emp, index) => {
        const name = emp.employeeName?.trim().toLowerCase();

        if(!name) return;

        if(nameMap[name] !== undefined) {
            
            if(!errors.employees) {
                errors.employees = []
            }

            errors.employees[index] = {
                employeeName: "Duplicate employee name",
            }

        } else {
            nameMap[name] = index;
        }
    })

    console.log(errors)
    return errors;
}