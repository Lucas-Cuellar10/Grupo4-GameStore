# Análisis del Sistema – GameStore

## 1. Descripción del proyecto

GameStore es un sistema de gestión de una tienda de videojuegos desarrollado en JavaScript. Su objetivo es administrar un catálogo de productos y permitir realizar operaciones de registro, búsqueda y venta.

El proyecto se centra en el **Tema 9: Excepciones**, incorporando mecanismos para detectar, controlar y manejar errores que puedan producirse durante la ejecución del programa.

## 2. Problema que busca resolver

En una tienda de videojuegos pueden producirse diferentes situaciones incorrectas, como intentar vender un producto sin stock, ingresar precios negativos o buscar videojuegos que no existen.

GameStore busca controlar estas situaciones mediante el manejo de excepciones, evitando que los errores interrumpan inesperadamente el funcionamiento del sistema.

## 3. Objetivo general

Desarrollar un sistema de gestión de videojuegos en JavaScript que permita administrar productos y realizar ventas, aplicando el manejo de excepciones para controlar errores y mejorar la confiabilidad del programa.

## 4. Alcance del sistema

El sistema permitirá:

- Registrar nuevos videojuegos.
- Consultar los videojuegos disponibles.
- Buscar videojuegos por nombre.
- Modificar información de los productos.
- Realizar ventas.
- Controlar el stock disponible.
- Validar precios y cantidades.
- Capturar y manejar excepciones.

## 5. Requerimientos funcionales

| Código | Requerimiento |
|---|---|
| RF01 | El sistema debe permitir registrar videojuegos. |
| RF02 | Debe permitir consultar el catálogo. |
| RF03 | Debe permitir buscar videojuegos por nombre. |
| RF04 | Debe permitir modificar los datos de un videojuego. |
| RF05 | Debe permitir realizar ventas. |
| RF06 | Debe verificar que exista stock suficiente. |
| RF07 | Debe validar que los precios y cantidades sean correctos. |
| RF08 | Debe mostrar mensajes cuando se produzcan errores. |

## 6. Requerimientos no funcionales

- El sistema debe estar desarrollado en JavaScript.
- El código debe estar organizado en funciones y estructuras de programación.
- Debe utilizar un manejo adecuado de excepciones.
- Debe mostrar mensajes claros para el usuario.
- Debe evitar interrupciones inesperadas por errores controlables.

## 7. Historias de usuario

### Historia 1: Registrar videojuegos

Como administrador, quiero registrar videojuegos con su nombre, precio y cantidad disponible para mantener actualizado el catálogo.

### Historia 2: Buscar videojuegos

Como usuario, quiero buscar un videojuego por su nombre para consultar su información.

### Historia 3: Realizar ventas

Como vendedor, quiero realizar ventas de videojuegos para administrar las operaciones de la tienda.

### Historia 4: Controlar el stock

Como vendedor, quiero que el sistema controle las cantidades disponibles para evitar vender productos sin stock suficiente.

### Historia 5: Controlar errores

Como usuario, quiero recibir mensajes claros cuando ingrese datos incorrectos para poder corregirlos.

## 8. Casos de uso

| Caso | Acción | Resultado esperado |
|---|---|---|
| CU01 | Registrar videojuego con datos válidos. | Producto registrado correctamente. |
| CU02 | Ingresar un precio negativo. | Se informa que el precio es inválido. |
| CU03 | Buscar un videojuego inexistente. | Se informa que no se encontró el producto. |
| CU04 | Vender más unidades que las disponibles. | Se informa que no hay stock suficiente. |
| CU05 | Realizar una venta válida. | Se registra la venta y se actualiza el stock. |

## 9. Manejo de excepciones

El proyecto utilizará los mecanismos de excepciones de JavaScript para controlar situaciones inesperadas.

Se trabajará con:

- `try`: ejecutar código que puede generar errores.
- `catch`: capturar y manejar las excepciones.
- `finally`: ejecutar instrucciones al finalizar un bloque.
- `throw`: lanzar excepciones manualmente.
- `Error`: crear y manejar errores.
- **Excepciones personalizadas:** representar errores específicos del sistema mediante clases que extienden de `Error`.

## 10. Conclusión

El análisis permite establecer las necesidades y funcionalidades principales de GameStore. A partir de estos requisitos se podrá avanzar hacia el diseño y la implementación del sistema, haciendo especial énfasis en el manejo de excepciones.

