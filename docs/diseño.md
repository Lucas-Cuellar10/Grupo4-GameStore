# Diseño del Sistema – GameStore

## 1. Introducción

En esta etapa se define la estructura y organización del sistema **GameStore**, estableciendo los componentes principales que permitirán administrar una tienda de videojuegos .

El diseño se enfoca en organizar las responsabilidades del sistema y preparar la implementación del manejo de excepciones.

## 2. Diseño de clases

Se utilizarán las siguientes clases principales:

### Clase `Videojuego`

Representará cada producto del catálogo.

**Atributos:**

- `id`
- `nombre`
- `plataforma`
- `precio`
- `stock`

### Clase `Tienda`

Será responsable de administrar el catálogo de videojuegos.

**Métodos:**

- `registrarVideojuego()`
- `listarVideojuegos()`
- `buscarVideojuego()`
- `modificarVideojuego()`
- `venderVideojuego()`

## 3. Diseño de excepciones

Se crearán excepciones personalizadas para controlar errores específicos del sistema:

- **`StockInsuficienteError`**: cuando se intenta vender una cantidad superior al stock disponible.
- **`PrecioInvalidoError`**: cuando se ingresa un precio negativo o incorrecto.
- **`VideojuegoNoEncontradoError`**: cuando se busca un producto que no existe.

Estas excepciones se implementarán mediante clases que extienden de `Error` en JavaScript.

## 4. Organización del proyecto

El proyecto estará organizado en diferentes archivos para facilitar su mantenimiento y comprensión:

```text
GameStore/
├── main.js                 # Punto de entrada del programa
├── Videojuego.js           # Definición de los videojuegos
├── Tienda.js               # Administración del catálogo y las ventas
├── excepciones/            # Errores personalizados
├── docs/                   # Documentación del proyecto
└── pruebas/                # Documentación de los casos de prueba
```

## 5. Modelo de datos

Cada videojuego contará con un identificador, nombre, plataforma, precio y cantidad disponible.

La tienda administrará los videojuegos mediante un catálogo que permitirá registrar, consultar, modificar y vender productos.

## 6. Manejo de excepciones

Se utilizarán las estructuras `try`, `catch`, `finally` y `throw` para detectar y controlar errores durante las operaciones del sistema.

El objetivo es evitar que los errores interrumpan inesperadamente el funcionamiento de GameStore y proporcionar mensajes claros al usuario.

## 7. Conclusión

El diseño establece la estructura general del sistema GameStore y las responsabilidades de sus componentes. Esta organización permitirá avanzar hacia la etapa de desarrollo utilizando JavaScript y aplicando el manejo de excepciones.
