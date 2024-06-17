

## Parte 1/2



### Consultas de una sola tabla

1. **Recuperar todas las líneas de productos con sus descripciones:**

   ```sql
   SELECT productLine, productDescription FROM products;
   ```

2. **Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':**

   ```sql
   SELECT * FROM employees where officeCode = 1;
   ```

3. **Listar todas las órdenes que tienen un estado de 'Enviado':**

   ```sql
   SELECT * FROM orders WHERE status = "Shipped";
   ```

4. **Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:**

   ```sql
   SELECT * FROM payments WHERE customerNumber = 103;
   ```

5. **Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:**

   ```sql
   SELECT * FROM customers WHERE country = "USA" AND creditLimit > 50000;
   ```

### Consultas de múltiples tablas

1. **Listar todos los productos junto con las descripciones de sus líneas de productos:**

   ```sql
   SELECT products.productName, productlines.textDescription FROM products INNER JOIN productlines ON products.productLine=productlines.productLine;
   ```

2. **Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:**

   ```sql
   SELECT firstName, lastName, email FROM employees WHERE reportsTo=1143;
   ```

3. **Encontrar todas las órdenes realizadas por clientes de 'Francia':**

   ```sql
   SELECT orders.* FROM orders JOIN customers ON orders.customerNumber = customers.customerNumber WHERE customers.country = 'France';
   ```

4. **Listar el monto total de los pagos recibidos de cada cliente:**

   ```sql
   SELECT payments.customerNumber, customers.customerName, customers.salesRepEmployeeNumber, SUM(payments.amount)
   FROM payments
   INNER JOIN customers ON payments.customerNumber=customers.customerNumber
   GROUP BY customers.customerNumber;
   ```

5. **Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101:**

   ```sql
   SELECT orderdetails.*, products.productName
   FROM orderdetails
   INNER JOIN products ON orderdetails.productCode = products.productCode 
   INNER JOIN orders ON orders.orderNumber = orderdetails.orderNumber
   WHERE orders.customerNumber = 101;
   ```



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



## Parte 2/2

### Consultas de una sola tabla

1. **Obtener el promedio del límite de crédito de todos los clientes:**

   ```
   
   ```

2. **Calcular el total de productos en stock:**

   ```
   
   ```

3. **Encontrar el precio medio de compra de todos los productos:**

   ```
   
   ```

4. **Contar la cantidad de oficinas en cada país:**

   ```
   
   ```

5. **Calcular el total de pagos recibidos:**

   ```
   
   ```

6. **Obtener la cantidad total de empleados:**

   ```
   
   ```

7. **Calcular la cantidad media de productos pedidos en las órdenes:**

   ```
   
   ```

8. **Encontrar el precio total de todos los productos:**

   ```
   
   ```

9. **Calcular el promedio del precio sugerido (MSRP) de los productos:**

   ```
   
   ```

10. **Contar la cantidad de empleados por título de trabajo:**

```

```

### Consultas de múltiples tablas

1. **Calcular el total de pagos recibidos por cada cliente:**

   ```
   
   ```

2. **Obtener el promedio del límite de crédito de los clientes por país:**

   ```
   
   ```

3. **Calcular el total de órdenes realizadas por cada cliente:**

   ```
   
   ```

4. **Encontrar la cantidad total de productos pedidos por cada cliente:**

   ```
   
   ```

5. **Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente:**

   ```
   
   ```

6. **Obtener el promedio de la cantidad de productos en stock por línea de productos:**

   ```
   
   ```

7. **Calcular el total de pagos recibidos por cada país:**

   ```
   
   ```

8. **Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado:**

   ```
   
   ```

9. **Calcular el total de órdenes gestionadas por cada empleado:**

   ```
   
   ```

10. **Obtener la cantidad total de productos vendidos por cada línea de productos:**

    ```
    
    ```

11. **Encontrar el promedio de la cantidad de productos ordenados por cada cliente:**

    ```
    
    ```

12. **Calcular el total de ventas realizadas en cada país:**

    ```
    
    ```

13. **Obtener el promedio del precio de compra de los productos por línea de productos:**

    ```
    
    ```

14. **Encontrar la cantidad total de productos vendidos por cada vendedor:**

    ```
    
    ```

15. **Calcular el total de pagos recibidos por cada vendedor:**

    ```
    
    ```

16. **Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor:**

    ```
    
    ```

17. **Encontrar el total de ventas realizadas por cada oficina:**

    ```
    
    ```

18. **Calcular la cantidad media de productos pedidos por cada cliente:**

    ```
    
    ```

19. **Obtener el total de pagos realizados en cada año:**

    ```
    
    ```

20. **Encontrar el promedio del precio de venta (priceEach) de los productos por línea de productos:**

    ```
    
    ```