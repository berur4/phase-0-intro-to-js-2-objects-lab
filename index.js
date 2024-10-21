const employee = {
    name: "Sam",
    streetAdress: "11 Broadway",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,
        name:"Sam",
        streetAdress:"11 Broadway",
    }

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam"
    employee.streetAdress = "12 Broadway"
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    employee = {...employee}
    delete employee.name
    delete employee.streetAdress
    return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee;
    
} 
