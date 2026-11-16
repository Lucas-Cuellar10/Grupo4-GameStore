class Videojuego {

    constructor(id, nombre, plataforma, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.precio = precio;
        this.stock = stock;
    }

    mostrarInformacion() {
        console.log("ID: " + this.id);
        console.log("Nombre: " + this.nombre);
        console.log("Plataforma: " + this.plataforma);
        console.log("Precio: $" + this.precio);
        console.log("Stock: " + this.stock);
        console.log("-------------------------");
    }
}

module.exports = Videojuego;
