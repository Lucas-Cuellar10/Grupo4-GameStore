const Videojuego = require("./Videojuego");
const Tienda = require("./Tienda");

// Crear una tienda
const tienda = new Tienda();

// Crear videojuegos
const juego1 = new Videojuego(1, "GTA V", "PlayStation 5", 35000, 10);
const juego2 = new Videojuego(2, "God of War", "PlayStation 5", 28000, 5);
const juego3 = new Videojuego(3, "Minecraft", "PC", 15000, 8);

// Registrar videojuegos
console.log("===== REGISTRO DE VIDEOJUEGOS =====");

tienda.registrarVideojuego(juego1);
tienda.registrarVideojuego(juego2);
tienda.registrarVideojuego(juego3);

// Probar precio inválido
console.log("\n===== PRUEBA DE PRECIO INVALIDO =====");

const juegoError = new Videojuego(4, "Juego de prueba", "PC", -500, 3);

tienda.registrarVideojuego(juegoError);

// Probar stock negativo
console.log("\n===== PRUEBA DE STOCK INVALIDO =====");

const juegoStockError = new Videojuego(
    5,
    "Juego de prueba",
    "PC",
    20000,
    -3
);

tienda.registrarVideojuego(juegoStockError);

// Mostrar catálogo
console.log("\n===== LISTADO DE VIDEOJUEGOS =====");

tienda.listarVideojuegos();

// Buscar videojuego existente
console.log("\n===== BUSQUEDA DE VIDEOJUEGO =====");

try {
    const encontrado = tienda.buscarVideojuego(1);

    console.log("Videojuego encontrado:");
    encontrado.mostrarInformacion();

} catch (error) {
    console.log(error.name + ": " + error.message);
}

// Buscar videojuego inexistente
console.log("\n===== PRUEBA DE BUSQUEDA INEXISTENTE =====");

try {
    const encontrado = tienda.buscarVideojuego(99);

    encontrado.mostrarInformacion();

} catch (error) {
    console.log(error.name + ": " + error.message);
}

// Realizar una venta
console.log("\n===== PRUEBA DE VENTA =====");

tienda.venderVideojuego(1, 2);

// Probar stock insuficiente
console.log("\n===== PRUEBA DE STOCK INSUFICIENTE =====");

tienda.venderVideojuego(1, 50);

// Mostrar catálogo actualizado
console.log("\n===== CATALOGO ACTUALIZADO =====");

tienda.listarVideojuegos();

// Modificar un videojuego
console.log("\n===== PRUEBA DE MODIFICACION =====");

tienda.modificarVideojuego(2, {
    nombre: "God of War Ragnarok",
    precio: 32000
});

// Probar modificación con precio inválido
console.log("\n===== PRUEBA DE MODIFICACION CON PRECIO INVALIDO =====");

tienda.modificarVideojuego(2, {
    precio: -5000
});

// Mostrar catálogo después de modificar
tienda.listarVideojuegos();

// Filtrar videojuegos por plataforma
console.log("\n===== FILTRAR POR PLATAFORMA =====");

tienda.listarPorPlataforma("PC");

// Eliminar un videojuego
console.log("\n===== PRUEBA DE ELIMINACION =====");

tienda.eliminarVideojuego(3);

// Probar eliminación de videojuego inexistente
console.log("\n===== PRUEBA DE ELIMINACION INEXISTENTE =====");

tienda.eliminarVideojuego(99);

// Mostrar catálogo final
console.log("\n===== CATALOGO FINAL =====");

tienda.listarVideojuegos();
