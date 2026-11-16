# Casos de prueba – GameStore

**Proyecto:** GameStore – Tienda de videojuegos  
**Tema:** Tema 9 – Excepciones  
**Tecnología:** JavaScript y Node.js  
**Etapa:** Día 6 – Pruebas y ajustes

## Objetivo

Verificar el correcto funcionamiento del sistema GameStore mediante pruebas de registro, búsqueda, venta, modificación, eliminación y control de errores.

## Casos de prueba

| N.º | Qué pruebo | Datos de entrada | Resultado esperado | Resultado obtenido | ¿Pasó? |
|---:|---|---|---|---|:---:|
| 1 | Registrar videojuego válido | GTA V, precio 35000, stock 10 | Se registra correctamente | Registro realizado correctamente | Sí |
| 2 | Registrar precio negativo | Precio -500 | Se rechaza el registro y se muestra una excepción | `PrecioInvalidoError` | Sí |
| 3 | Registrar stock negativo | Stock -3 | Se rechaza el registro y se informa el error | Error: El stock no puede ser negativo | Sí |
| 4 | Buscar videojuego existente | ID 1 | Se muestra la información del videojuego | Se encontró GTA V | Sí |
| 5 | Buscar videojuego inexistente | ID 99 | Se muestra una excepción personalizada | `VideojuegoNoEncontradoError` | Sí |
| 6 | Realizar una venta válida | ID 1, cantidad 2 | Se realiza la venta y disminuye el stock | Venta realizada, stock restante 8 | Sí |
| 7 | Vender más unidades que las disponibles | ID 1, cantidad 50 | Se rechaza la venta por falta de stock | `StockInsuficienteError` | Sí |
| 8 | Modificar videojuego existente | ID 2, nuevo nombre y precio | Se actualizan los datos | Videojuego modificado correctamente | Sí |
| 9 | Modificar con precio negativo | ID 2, precio -5000 | Se rechaza la modificación | `PrecioInvalidoError` | Sí |
| 10 | Filtrar por plataforma | PC | Se muestran los videojuegos de PC | Se mostró Minecraft | Sí |
| 11 | Eliminar videojuego existente | ID 3 | Se elimina del catálogo | Minecraft eliminado correctamente | Sí |
| 12 | Eliminar videojuego inexistente | ID 99 | Se informa que el videojuego no existe | `VideojuegoNoEncontradoError` | Sí |

## Conclusión

Las pruebas realizadas permitieron verificar el funcionamiento de las principales operaciones de GameStore y el tratamiento de situaciones incorrectas mediante excepciones.

Se comprobó que el sistema puede rechazar precios y stocks inválidos, controlar las ventas, detectar videojuegos inexistentes y evitar modificaciones con precios incorrectos.

Las pruebas ejecutadas finalizaron correctamente y los resultados obtenidos coincidieron con los resultados esperados.

