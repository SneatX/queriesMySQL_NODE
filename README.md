### 1. Consultas sobre una tabla

1. Devuelve un listado con todos los pedidos que se han realizado. Los pedidos deben estar ordenados por la fecha de realización, mostrando en primer lugar los pedidos más recientes.

2. Devuelve todos los datos de los dos pedidos de mayor valor.

   ```sql
   # Rojas
   ```

3. Devuelve un listado con los identificadores de los clientes que han realizado algún pedido. Tenga en cuenta que no debe mostrar identificadores que estén repetidos.

4. Devuelve un listado de todos los pedidos que se realizaron durante el año 2017, cuya cantidad total sea superior a 500€.

5. Devuelve un listado con el nombre y los apellidos de los comerciales que tienen una comisión entre 0.05 y 0.11.

   ```sql
   # Samuel
   ```

6. Devuelve el valor de la comisión de mayor valor que existe en la tabla `comercial`.

7. Devuelve el identificador, nombre y primer apellido de aquellos clientes cuyo segundo apellido **no** es `NULL`. El listado deberá estar ordenado alfabéticamente por apellidos y nombre.

   ```sql
   # Eder
   ```

8. Devuelve un listado de los nombres de los clientes que empiezan por `A` y terminan por `n` y también los nombres que empiezan por `P`. El listado deberá estar ordenado alfabéticamente.

   ```sql
   # Jaime Alexander
   ```

9. Devuelve un listado de los nombres de los clientes que **no** empiezan por `A`. El listado deberá estar ordenado alfabéticamente.

   ```sql
   #Jhoan Barreto
   ```

10. Devuelve un listado con los nombres de los comerciales que terminan por `el` o `o`. Tenga en cuenta que se deberán eliminar los nombres repetidos.

### 2. Consultas multitabla (Composición interna)

Resuelva todas las consultas utilizando la sintaxis de `SQL1` y `SQL2`.

1. Devuelve un listado con el identificador, nombre y los apellidos de todos los clientes que han realizado algún pedido. El listado debe estar ordenado alfabéticamente y se deben eliminar los elementos repetidos.

2. Devuelve un listado que muestre todos los pedidos que ha realizado cada cliente. El resultado debe mostrar todos los datos de los pedidos y del cliente. El listado debe mostrar los datos de los clientes ordenados alfabéticamente.

   ```sql
   # Saez
   ```

3. Devuelve un listado que muestre todos los pedidos en los que ha participado un comercial. El resultado debe mostrar todos los datos de los pedidos y de los comerciales. El listado debe mostrar los datos de los comerciales ordenados alfabéticamente.

   ```sql
   # Kevin Galvis
   ```

4. Devuelve un listado que muestre todos los clientes, con todos los pedidos que han realizado y con los datos de los comerciales asociados a cada pedido.

   ```sql
   # Gabriel
   ```

5. Devuelve un listado de todos los clientes que realizaron un pedido durante el año `2017`, cuya cantidad esté entre `300` € y `1000` €.

   ```sql
   # Johan Diaz
   ```

6. Devuelve el nombre y los apellidos de todos los comerciales que ha participado en algún pedido realizado por `María Santana Moreno`.

   ```sql
   # Santiago Muñoz
   ```

   

7. Devuelve el nombre de todos los clientes que han realizado algún pedido con el comercial `Daniel Sáez Vega`.

### 3. Consultas multitabla (Composición externa)

Resuelva todas las consultas utilizando las cláusulas `LEFT JOIN` y `RIGHT JOIN`.

1. Devuelve un listado con **todos los clientes** junto con los datos de los pedidos que han realizado. Este listado también debe incluir los clientes que no han realizado ningún pedido. El listado debe estar ordenado alfabéticamente por el primer apellido, segundo apellido y nombre de los clientes.

2. Devuelve un listado con **todos los comerciales** junto con los datos de los pedidos que han realizado. Este listado también debe incluir los comerciales que no han realizado ningún pedido. El listado debe estar ordenado alfabéticamente por el primer apellido, segundo apellido y nombre de los comerciales.

   ```sql
   # Veronica
   ```

3. Devuelve un listado que solamente muestre los clientes que no han realizado ningún pedido.

4. Devuelve un listado que solamente muestre los comerciales que no han realizado ningún pedido.

   ```sql
   # Camilo Navas
   ```

5. Devuelve un listado con los clientes que no han realizado ningún pedido y de los comerciales que no han participado en ningún pedido. Ordene el listado alfabéticamente por los apellidos y el nombre. En en listado deberá diferenciar de algún modo los clientes y los comerciales.

   ```sql
   # German Ramos
   ```

   

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

   