class Cliente {
    constructor(name) {
      this.name = name;
    }
    cNome = this.name;
    atrib1 = '';
    atrib2 = '';
    atrib3 = '';
  };
  
  function criarCliente(nome) {
    listaDeClientes[nome] = new Cliente(nome);
    return;
  };
  
let listaDeClientes = {
  Cliente:'Testando'
}