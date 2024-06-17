import {connection} from "../../db/connection.js"
//parte 1/2

// 4. Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:
export const getAllPaymentsOfClientCode103 = async() =>{
    let [data] = await connection.query(`SELECT * FROM payments WHERE customerNumber = 103;`)
    return data
}

// Consultas de múltiples tablas

//4. Listar el monto total de los pagos recibidos de cada cliente:
export const allCustomersTotalAmount = async() =>{
    let [data] = await connection.query(`
    SELECT payments.customerNumber, customers.customerName, customers.salesRepEmployeeNumber, SUM(payments.amount)
    FROM payments
    INNER JOIN customers ON payments.customerNumber=customers.customerNumber
    GROUP BY customers.customerNumber;
    `)
    return data
}