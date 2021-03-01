class ClienteEspecial extends Cliente{
    private _dependencia: Cliente;
    constructor(nome: string, cpf: string, conta: string, dependencia: Cliente) {
        super(nome, cpf, conta);
        this._dependencia = dependencia;
    }
}