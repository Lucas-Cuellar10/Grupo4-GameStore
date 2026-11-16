class StockInsuficienteError extends Error {

    constructor(mensaje) {
        super(mensaje);
        this.name = "StockInsuficienteError";
    }

}

module.exports = StockInsuficienteError;
