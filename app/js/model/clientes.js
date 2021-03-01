class Clientes {
    constructor() {
        this.clientes = new Array();
        const c1 = new Cliente('Bilo', '11122233344', '1');
        const c2 = new Cliente('Borat', '22233344411', '2');
        this.clientes.push(c1, c2);
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    inserir(cliente) {
        this.listar().push(cliente);
    }
    remover(cpf) {
        const rem = this.pesquisar(cpf);
        if (rem) {
            const indiceCliente = this.clientes.indexOf(rem);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
}
