import {connection} from "../../db/connection.js"
//parte 1/2

// 2. Encontrar todos los empleados que trabajan en la oficina de 'San Francisco
export const getAllEmployeesOfOneCity = async() =>{
    let [data] = await connection.query(`SELECT * FROM employees where officeCode = 1;`)
    return data
}

// Consultas de múltiples tablas
//2. Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:
export const getEmployeesNameEmailIfTheyReportsEmployee1143 = async() =>{
    let [data] = await connection.query(`
    SELECT firstName, lastName, email 
    FROM employees 
    WHERE reportsTo=1143;
    `)
    return data
}