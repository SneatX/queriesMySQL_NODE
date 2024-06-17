import { connection } from "../../db/connection.js";
//parte 1/2

//5. Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:

export const getAllCustomersFromUSAIfCreditUpTo50000 = async() =>{
    let [data] = await connection.query(`SELECT * FROM customers WHERE country = "USA" AND creditLimit > 50000;`)
    return data
}

// Consultas de múltiples tablas