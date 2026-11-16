class PrecioInvalidoError extends Error {

    constructor(mensaje) {
        super(mensaje);
        this.name = "PrecioInvalidoError";
    }

}

module.exports = PrecioInvalidoError;
