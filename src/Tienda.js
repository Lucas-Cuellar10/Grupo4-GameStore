const PrecioInvalidoError = require("./excepciones/PrecioInvalidoError");
const VideojuegoNoEncontradoError = require("./excepciones/VideojuegoNoEncontradoError");
const StockInsuficienteError = require("./excepciones/StockInsuficienteError");

class Tienda {

    constructor() {
        this.catalogo = [];
    }

    // Registrar videojuegos
    registrarVideojuego(videojuego) {

        try {

            if (videojuego.precio <= 0) {
                throw new PrecioInvalidoError(
                    "El precio debe ser mayor a cero."
                );
            }

            if (videojuego.stock < 0) {
                throw new Error(
                    "El stock no puede ser negativo."
                );
            }

            this.catalogo.push(videojuego);

            console.log("Videojuego registrado correctamente.");

        } catch (error) {

            console.log(error.name + ": " + error.message);

        } finally {

            console.log("Finalizó el proceso de registro.");

        }
    }

    // Listar videojuegos
    listarVideojuegos() {

        if (this.catalogo.length === 0) {
            console.log("No hay videojuegos registrados.");
            return;
        }

        console.log("===== CATÁLOGO GAMESTORE =====");

        this.catalogo.forEach(function(videojuego) {
            videojuego.mostrarInformacion();
        });
    }

    // Buscar videojuegos por ID
    buscarVideojuego(id) {

        const videojuego = this.catalogo.find(function(juego) {
            return juego.id === id;
        });

        if (!videojuego) {
            throw new VideojuegoNoEncontradoError(
                "No se encontró un videojuego con el ID: " + id
            );
        }

        return videojuego;
    }

    // Vender videojuegos
    venderVideojuego(id, cantidad) {

        try {

            const videojuego = this.buscarVideojuego(id);

            if (cantidad <= 0) {
                throw new Error(
                    "La cantidad debe ser mayor a cero."
                );
            }

            if (cantidad > videojuego.stock) {
                throw new StockInsuficienteError(
                    "No hay suficiente stock disponible."
                );
            }

            videojuego.stock -= cantidad;

            console.log("Venta realizada correctamente.");
            console.log("Videojuego: " + videojuego.nombre);
            console.log("Unidades vendidas: " + cantidad);
            console.log("Stock restante: " + videojuego.stock);

        } catch (error) {

            console.log(error.name + ": " + error.message);

        }
    }

    // Modificar los datos de un videojuego
    modificarVideojuego(id, nuevosDatos) {

        try {

            const videojuego = this.buscarVideojuego(id);

            if (nuevosDatos.precio !== undefined && nuevosDatos.precio <= 0) {
                throw new PrecioInvalidoError(
                    "El precio debe ser mayor a cero."
                );
            }

            if (nuevosDatos.stock !== undefined && nuevosDatos.stock < 0) {
                throw new Error(
                    "El stock no puede ser negativo."
                );
            }

            if (nuevosDatos.nombre !== undefined) {
                videojuego.nombre = nuevosDatos.nombre;
            }

            if (nuevosDatos.plataforma !== undefined) {
                videojuego.plataforma = nuevosDatos.plataforma;
            }

            if (nuevosDatos.precio !== undefined) {
                videojuego.precio = nuevosDatos.precio;
            }

            if (nuevosDatos.stock !== undefined) {
                videojuego.stock = nuevosDatos.stock;
            }

            console.log("Videojuego modificado correctamente.");

        } catch (error) {

            console.log(error.name + ": " + error.message);

        }
    }

    // Eliminar un videojuego del catálogo
    eliminarVideojuego(id) {

        try {

            const indice = this.catalogo.findIndex(function(juego) {
                return juego.id === id;
            });

            if (indice === -1) {
                throw new VideojuegoNoEncontradoError(
                    "No se encontró un videojuego con el ID: " + id
                );
            }

            const eliminado = this.catalogo.splice(indice, 1);

            console.log(
                "Videojuego eliminado correctamente: " + eliminado[0].nombre
            );

        } catch (error) {

            console.log(error.name + ": " + error.message);

        }
    }

    // Listar videojuegos por plataforma
    listarPorPlataforma(plataforma) {

        const videojuegosFiltrados = this.catalogo.filter(function(juego) {
            return juego.plataforma.toLowerCase() === plataforma.toLowerCase();
        });

        if (videojuegosFiltrados.length === 0) {
            console.log("No hay videojuegos registrados para: " + plataforma);
            return;
        }

        console.log(
            "===== VIDEOJUEGOS DE " + plataforma.toUpperCase() + " ====="
        );

        videojuegosFiltrados.forEach(function(videojuego) {
            videojuego.mostrarInformacion();
        });
    }

}

module.exports = Tienda;

