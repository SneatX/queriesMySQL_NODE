import {connection} from "../../db/connection.js"
//parte 1/2

// 1. Listar todos los productos junto con las descripciones de sus líneas de productos
export const getAllProductsDescription = async()=>{
    let [result] = await connection.query(`SELECT productLine, productDescription FROM products`)
    return result
}


// Consultas de múltiples tablas
//1. Listar todos los productos junto con las descripciones de sus líneas de productos:
export const getAllProductsWithTheirDescriptions = async() =>{
    let [data] = await connection.query(`
    SELECT products.productName, productlines.textDescription 
    FROM products 
    INNER JOIN productlines ON products.productLine=productlines.productLine;
    `)
    return data
}