import {connection} from "../../db/connection.js"
//parte 1/2

// 3. Listar todas las órdenes que tienen un estado de 'Enviado
export const getAllOrdersWithShippedStatus = async() =>{
    let [data] = await connection.query(`SELECT * FROM orders WHERE status = "Shipped";`)
    return data
}

// Consultas de múltiples tablas
//3. Encontrar todas las órdenes realizadas por clientes de 'Francia':
export const getAllOrdersOfFrenchClients = async() =>{
    let [data] = await connection.query(`
    SELECT orders.* 
    FROM orders 
    JOIN customers ON orders.customerNumber = customers.customerNumber 
    WHERE customers.country = 'France';
    `)
    return data
}