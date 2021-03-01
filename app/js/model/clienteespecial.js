class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta, dependencia) {
        super(nome, cpf, conta);
        this._dependencia = dependencia;
    }
}
