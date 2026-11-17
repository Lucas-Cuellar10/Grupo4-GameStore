class VideojuegoNoEncontradoError extends Error {

    constructor(mensaje) {
        super(mensaje);
        this.name = "VideojuegoNoEncontradoError";
    }

}

module.exports = VideojuegoNoEncontradoError;
