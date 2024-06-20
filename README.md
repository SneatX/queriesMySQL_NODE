### 1. Consultas sobre una tabla

1. Devuelve un listado con todos los pedidos que se han realizado. Los pedidos deben estar ordenados por la fecha de realización, mostrando en primer lugar los pedidos más recientes.

   ```sql
   SELECT * 
   FROM pedido
   ORDER BY fecha DESC;
   ```

2. Devuelve todos los datos de los dos pedidos de mayor valor.

   ```sql
   # Rojas
   SELECT * 
   FROM pedido
   ORDER BY total DESC
   LIMIT 2;
   ```

3. Devuelve un listado con los identificadores de los clientes que han realizado algún pedido. Tenga en cuenta que no debe mostrar identificadores que estén repetidos.

   ```sql
   SELECT id_cliente 
   FROM pedido
   GROUP BY id_cliente;
   ```

4. Devuelve un listado de todos los pedidos que se realizaron durante el año 2017, cuya cantidad total sea superior a 500€.

   ```sql
   SELECT * 
   FROM pedido
   WHERE total > 500;
   ```

5. Devuelve un listado con el nombre y los apellidos de los comerciales que tienen una comisión entre 0.05 y 0.11.

   ```sql
   # Samuel
   SELECT *
   FROM comercial
   WHERE comision > 0.05 AND comision < 0.11;
   ```

6. Devuelve el valor de la comisión de mayor valor que existe en la tabla `comercial`.

   ```sql
   SELECT * 
   FROM comercial 
   ORDER BY comision DESC
   LIMIT 1;
   ```

7. Devuelve el identificador, nombre y primer apellido de aquellos clientes cuyo segundo apellido **no** es `NULL`. El listado deberá estar ordenado alfabéticamente por apellidos y nombre.

   ```sql
   # Eder
   SELECT id, CONCAT(nombre,' ', apellido1) AS nombre_completo  
   FROM cliente 
   WHERE apellido2 IS NOT NULL 
   ORDER BY 
   nombre ASC,
   apellido1 ASC, 
   apellido2 ASC;
   ```

8. Devuelve un listado de los nombres de los clientes que empiezan por `A` y terminan por `n` y también los nombres que empiezan por `P`. El listado deberá estar ordenado alfabéticamente.

   ```sql
   # Jaime Alexander
   SELECT nombre 
   FROM cliente
   WHERE (nombre LIKE "a%" AND nombre LIKE "%n") OR nombre LIKE "p%"
   ORDER BY 
   nombre;
   ```

9. Devuelve un listado de los nombres de los clientes que **no** empiezan por `A`. El listado deberá estar ordenado alfabéticamente.

   ```sql
   #Jhoan Barreto
   SELECT nombre 
   FROM cliente
   WHERE nombre NOT LIKE "a%"
   ORDER BY 
   nombre;
   ```

10. Devuelve un listado con los nombres de los comerciales que terminan por `el` o `o`. Tenga en cuenta que se deberán eliminar los nombres repetidos.

    ```sql
    SELECT DISTINCT nombre
    FROM comercial
    WHERE nombre LIKE "%el" OR NOMBRE LIKE "%o";
    ```

### 2. Consultas multitabla (Composición interna)

Resuelva todas las consultas utilizando la sintaxis de `SQL1` y `SQL2`.

1. Devuelve un listado con el identificador, nombre y los apellidos de todos los clientes que han realizado algún pedido. El listado debe estar ordenado alfabéticamente y se deben eliminar los elementos repetidos.

   ```sql
   SELECT DISTINCT c.id, c.nombre, CONCAT(c.apellido1," ", c.apellido2) AS apellidos
   FROM pedido AS p
   INNER JOIN cliente AS c ON p.id_cliente = c.id
   ORDER BY c.nombre;
   ```

2. Devuelve un listado que muestre todos los pedidos que ha realizado cada cliente. El resultado debe mostrar todos los datos de los pedidos y del cliente. El listado debe mostrar los datos de los clientes ordenados alfabéticamente.

   ```sql
   # Saez
   SELECT p.*, c.*
   FROM pedido AS p
   INNER JOIN cliente AS c ON p.id_cliente=c.id;
   ```

3. Devuelve un listado que muestre todos los pedidos en los que ha participado un comercial. El resultado debe mostrar todos los datos de los pedidos y de los comerciales. El listado debe mostrar los datos de los comerciales ordenados alfabéticamente.

   ```sql
   # Kevin Galvis
   SELECT p.id, p.total, p.fecha, c.id AS id_comercial, c.nombre, CONCAT(c.apellido1," ", c.apellido2) AS apellidos, c.comision
   FROM pedido AS p
   INNER JOIN comercial AS c ON p.id_comercial = c.id
   ORDER BY c.nombre;
   
   ```

4. Devuelve un listado que muestre todos los clientes, con todos los pedidos que han realizado y con los datos de los comerciales asociados a cada pedido.

   ```sql
   # Gabriel
   SELECT p.id, p.total, p.fecha, cl.nombre AS nombre_cliente, CONCAT(cl.apellido1, " ", cl.apellido2) AS apellidos_cliente, cl.categoria AS categoria_cliente, co.nombre AS nombre_comercial, CONCAT(co.apellido1, " ", co.apellido2) AS apellidos_comercial, co.comision
   FROM pedido AS p
   INNER JOIN cliente AS cl ON p.id_cliente = cl.id
   INNER JOIN comercial AS co ON p.id_comercial = co.id;
   ```

5. Devuelve un listado de todos los clientes que realizaron un pedido durante el año `2017`, cuya cantidad esté entre `300` € y `1000` €.

   ```sql
   # Johan Diaz
   SELECT DISTINCT cl.*, p.fecha, p.total
   FROM cliente AS cl
   RIGHT JOIN pedido AS p ON cl.id = p.id_cliente
   WHERE p.fecha LIKE "2017%" AND p.total > 300 AND p.total < 1000;
   ```

6. Devuelve el nombre y los apellidos de todos los comerciales que ha participado en algún pedido realizado por `María Santana Moreno`.

   ```sql
   # Santiago Muñoz
   SELECT DISTINCT co.nombre, CONCAT(co.apellido1, " ", co.apellido2) AS apellidos
   FROM comercial AS co
   INNER JOIN pedido AS p ON co.id = p.id_comercial
   WHERE p.id_cliente = 6;
   ```

7. Devuelve el nombre de todos los clientes que han realizado algún pedido con el comercial `Daniel Sáez Vega`.

   ```sql
   SELECT DISTINCT cl.nombre 
   FROM cliente AS cl
   INNER JOIN pedido AS p ON p.id_cliente = cl.id
   INNER JOIN comercial AS co ON p.id_comercial = co.id
   WHERE co.id = 1;
   ```

### 3. Consultas multitabla (Composición externa)

Resuelva todas las consultas utilizando las cláusulas `LEFT JOIN` y `RIGHT JOIN`.

1. Devuelve un listado con **todos los clientes** junto con los datos de los pedidos que han realizado. Este listado también debe incluir los clientes que no han realizado ningún pedido. El listado debe estar ordenado alfabéticamente por el primer apellido, segundo apellido y nombre de los clientes.

   ```sql
   SELECT cl.*, p.*
   FROM cliente AS cl
   LEFT JOIN pedido AS p ON p.id_cliente = cl.id
   ORDER BY 
   cl.apellido1,
   cl.apellido2,
   cl.nombre;
   ```

2. Devuelve un listado con **todos los comerciales** junto con los datos de los pedidos que han realizado. Este listado también debe incluir los comerciales que no han realizado ningún pedido. El listado debe estar ordenado alfabéticamente por el primer apellido, segundo apellido y nombre de los comerciales.

   ```sql
   # Veronica
   SELECT co.*, p.*
   FROM comercial AS co
   LEFT JOIN pedido AS p ON co.id = p.id_comercial
   ORDER BY
   co.apellido1,
   co.apellido2,
   co.nombre;
   ```

3. Devuelve un listado que solamente muestre los clientes que no han realizado ningún pedido.

   ```sql
   SELECT cl.*
   FROM cliente AS cl
   LEFT JOIN pedido AS p ON cl.id = p.id_cliente
   WHERE p.id IS NULL;
   ```

4. Devuelve un listado que solamente muestre los comerciales que no han realizado ningún pedido.

   ```sql
   # Camilo Navas
   SELECT co.*
   FROM comercial AS co
   LEFT JOIN pedido AS p ON co.id = p.id_comercial
   WHERE p.id IS NULL;
   ```

5. Devuelve un listado con los clientes que no han realizado ningún pedido y de los comerciales que no han participado en ningún pedido. Ordene el listado alfabéticamente por los apellidos y el nombre. En en listado deberá diferenciar de algún modo los clientes y los comerciales.

   ```sql
   SELECT 'Cliente' AS tipo, cl.nombre, CONCAT(cl.apellido1, " ", cl.apellido2) AS apellidos
   FROM cliente AS cl
   LEFT JOIN pedido AS p ON cl.id = p.id_cliente
   WHERE p.id IS NULL
   
   UNION 
   
   SELECT 'Comercial' AS tipo, co.nombre, CONCAT(co.apellido1, " ", co.apellido2) AS apellidos
   FROM comercial AS co
   LEFT JOIN pedido AS p ON co.id = p.id_comercial
   WHERE p.id IS NULL
   
   ORDER BY apellidos, nombre;
   
   ```

   

### 

### 4. Consultas resumen

1. Calcula la cantidad total que suman todos los pedidos que aparecen en la tabla `pedido`.

2. Calcula la cantidad media de todos los pedidos que aparecen en la tabla `pedido`.

3. Calcula el número total de comerciales distintos que aparecen en la tabla `pedido`.

   ```sql
   SELECT COUNT(DISTINCT id_comercial) AS 'total_comerciales' FROM pedido;
   ```

4. Calcula el número total de clientes que aparecen en la tabla `cliente`.

5. Calcula cuál es la mayor cantidad que aparece en la tabla `pedido`.

   ```sql
   # Juan Rodriguez
   ```

6. Calcula cuál es la menor cantidad que aparece en la tabla `pedido`.

   ```sql
   # Hendrickson
   ```

7. Calcula cuál es el valor máximo de categoría para cada una de las ciudades que aparece en la tabla `cliente`.

   ```sql
   # Rivas
   ```

8. Calcula cuál es el máximo valor de los pedidos realizados durante el mismo día para cada uno de los clientes. Es decir, el mismo cliente puede haber realizado varios pedidos de diferentes cantidades el mismo día. Se pide que se calcule cuál es el pedido de máximo valor para cada uno de los días en los que un cliente ha realizado un pedido. Muestra el identificador del cliente, nombre, apellidos, la fecha y el valor de la cantidad.

   ```SQL
   # WILIAN GALVIS
   ```

9. Calcula cuál es el máximo valor de los pedidos realizados durante el mismo día para cada uno de los clientes, teniendo en cuenta que sólo queremos mostrar aquellos pedidos que superen la cantidad de 2000 €.

   ```sql
   # Wiliam Meza
   ```

10. Calcula el máximo valor de los pedidos realizados para cada uno de los comerciales durante la fecha `2016-08-17`. Muestra el identificador del comercial, nombre, apellidos y total.

    ```sql
    # Kelly
    ```

11. Devuelve un listado con el identificador de cliente, nombre y apellidos y el número total de pedidos que ha realizado cada uno de clientes. Tenga en cuenta que pueden existir clientes que no han realizado ningún pedido. Estos clientes también deben aparecer en el listado indicando que el número de pedidos realizados es `0`.

    ```sql
    # Santiago Ospina
    SELECT cliente.id, cliente.apellido1, cliente.apellido2, COUNT(pedido.id)
    FROM cliente
    LEFT JOIN pedido ON cliente.id=pedido.id_cliente
    GROUP BY cliente.id;
    ```

12. Devuelve un listado con el identificador de cliente, nombre y apellidos y el número total de pedidos que ha realizado cada uno de clientes **durante el año 2017**.

    ```sql
    # David Julio
    ```

13. Devuelve un listado que muestre el identificador de cliente, nombre, primer apellido y el valor de la máxima cantidad del pedido realizado por cada uno de los clientes. El resultado debe mostrar aquellos clientes que no han realizado ningún pedido indicando que la máxima cantidad de sus pedidos realizados es `0`. Puede hacer uso de la función [`IFNULL`](https://dev.mysql.com/doc/refman/8.0/en/control-flow-functions.html#function_ifnull).

    ```sql
    # Andres Alvares
    ```

14. Devuelve cuál ha sido el pedido de máximo valor que se ha realizado cada año.

    ```sql
    # ANDERSON
    ```

15. Devuelve el número total de pedidos que se han realizado cada año.

    ```sql
    # Manuel Gil
    ```

#### 5. Subconsultas con `IN` y `NOT IN`

1. Devuelve un listado de los clientes que no han realizado ningún pedido. (Utilizando `IN` o `NOT IN`).

2. Devuelve un listado de los comerciales que no han realizado ningún pedido. (Utilizando `IN` o `NOT IN`).

   ```sql
   # Manuel Serrano
   ```

   