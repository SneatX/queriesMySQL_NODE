import { getAllProductsDescription, getAllProductsWithTheirDescriptions } from "./modules/products.js";
import { getAllEmployeesOfOneCity, getEmployeesNameEmailIfTheyReportsEmployee1143 } from "./modules/employees.js";
import { getAllOrdersWithShippedStatus, getAllOrdersOfFrenchClients } from "./modules/orders.js";
import { getAllPaymentsOfClientCode103, allCustomersTotalAmount } from "./modules/payments.js";
import { getAllCustomersFromUSAIfCreditUpTo50000 } from "./modules/customers.js";

// Parte 1/2
//Consultas de una sola tabla

//1. Recuperar todas las líneas de productos con sus descripciones:
//console.log(await getAllProductsDescription())

//2. Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':
//console.log(await getAllEmployeesOfOneCity())

//3. Listar todas las órdenes que tienen un estado de 'Enviado':
//console.log(await getAllOrdersWithShippedStatus())

//4. Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:
//console.log(await getAllPaymentsOfClientCode103())

//5.Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:
//console.log(await getAllCustomersFromUSAIfCreditUpTo50000())


//Consultas de múltiples tablas

//1. Listar todos los productos junto con las descripciones de sus líneas de productos:
//console.log(await getAllProductsWithTheirDescriptions())

//2. Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:
//console.log(await getEmployeesNameEmailIfTheyReportsEmployee1143())

//3. Encontrar todas las órdenes realizadas por clientes de 'Francia':
//console.log(await getAllOrdersOfFrenchClients())

//4. Listar el monto total de los pagos recibidos de cada cliente:
console.log(await allCustomersTotalAmount())