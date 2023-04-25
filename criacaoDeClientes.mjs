export class Cliente {
  constructor(name) {
    this.name = name;
  }
  cNome = this.name;
  atrib1 = '';
  atrib2 = '';
  atrib3 = '';
};

export function criarCliente(nome, lista = listaDeClientes) {
  lista[nome] = new Cliente(nome);
  return;
};