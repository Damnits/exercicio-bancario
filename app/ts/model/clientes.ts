class Clientes{
    private clientes: Array<Cliente>;

    constructor() {
       this.clientes = new Array<Cliente>();
        const c1 = new Cliente('Bilo', '11122233344', '1');
        const c2 = new Cliente('Borat', '22233344411','2');
        this.clientes.push(c1, c2);
    }
    listar(): Array<Cliente> {
        return this.clientes;
    }
    pesquisar(cpf: string): Cliente{
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    inserir(cliente: Cliente): void{
        this.listar().push(cliente);
    }

    remover(cpf: string): void {
        const rem = this.pesquisar(cpf);
        if(rem){
            const indiceCliente = this.clientes.indexOf(rem);
            if(indiceCliente > -1){
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }


}