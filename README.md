# GameStore – Tienda de videojuegos

##  Descripción del proyecto

GameStore es un sistema de gestión de una tienda de videojuegos desarrollado en JavaScript utilizando Node.js.

El proyecto permite administrar un catálogo de videojuegos mediante operaciones de registro, búsqueda, modificación, eliminación, venta y filtrado por plataforma.

El desarrollo se centra en el **Tema 9: Excepciones**, implementando mecanismos para detectar y controlar errores durante la ejecución del sistema.

##  Objetivo

Desarrollar una aplicación que permita gestionar una tienda de videojuegos, aplicando programación orientada a objetos y manejo de excepciones en JavaScript.

##  Tecnologías utilizadas

- JavaScript
- Node.js
- Eclipse IDE
- GitHub
- Trello para el tablero

##  Funcionalidades principales

- Registrar videojuegos en el catálogo.
- Listar todos los videojuegos disponibles.
- Buscar videojuegos mediante su ID.
- Vender videojuegos y actualizar el stock.
- Modificar los datos de un videojuego.
- Eliminar videojuegos del catálogo.
- Filtrar videojuegos según su plataforma.
- Validar precios y cantidades de stock.
- Controlar errores mediante excepciones.

##  Manejo de excepciones

El sistema utiliza las estructuras `try`, `catch` y `finally` para controlar errores y evitar que las operaciones inválidas se ejecuten incorrectamente.

Se implementaron las siguientes excepciones personalizadas:

- **`PrecioInvalidoError`**: controla los precios menores o iguales a cero.
- **`StockInsuficienteError`**: controla las ventas que superan el stock disponible.
- **`VideojuegoNoEncontradoError`**: se utiliza cuando no existe un videojuego con el ID solicitado.

También se utilizan excepciones generales de JavaScript para otras validaciones.

##  Estructura del proyecto

```text
GameStore/
├── excepciones/
│   ├── PrecioInvalidoError.js
│   ├── StockInsuficienteError.js
│   └── VideojuegoNoEncontradoError.js
├── pruebas/
│   └── casos-de-prueba.md
├── docs/
│   ├── analisis.md
│   └── diseno.md
├── kanban/
│   └── README.md
├── Videojuego.js
├── Tienda.js
├── main.js
├── bitacora.md
├── .gitignore
└── README.md
```

##  Cómo ejecutar el proyecto

### Requisitos previos

- Tener instalado Node.js.
- Tener descargado el proyecto GameStore.

### Pasos

1. Abrir la carpeta del proyecto.
2. Abrir una terminal o CMD en la carpeta principal.
3. Ejecutar el siguiente comando:

   ```bash
   node main.js
   ```

4. Observar los resultados de las operaciones y las pruebas en la consola.

##  Pruebas realizadas

Se realizaron pruebas para verificar el funcionamiento de las operaciones principales:

- Registro de videojuegos válidos.
- Rechazo de precios inválidos.
- Rechazo de stock negativo.
- Búsqueda de videojuegos existentes e inexistentes.
- Ventas exitosas y ventas con stock insuficiente.
- Modificación de videojuegos.
- Eliminación de videojuegos.
- Filtrado por plataforma.

Los resultados se encuentran documentados en `pruebas/casos-de-prueba.md`.

##  Organización del proyecto

El desarrollo se organizó mediante un tablero Kanban en Trello, utilizando las columnas:

- Por hacer.
- En curso.
- Hecho.

También se registraron las actividades realizadas en el archivo `bitacora.md`.

## 👥 Integrantes

-Cuellar Lucas

-Santi De Soisa

Grupo 4.

##  Materia

**AED2 – Proyecto Integrador**  
**Tema seleccionado:** Tema 9 – Excepciones.

##  Estado del proyecto

Proyecto en etapa de pruebas y documentación final.
