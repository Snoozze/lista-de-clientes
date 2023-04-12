import { listaDeClientes } from "./app.js";

export class Cliente {
  constructor(name) {
    this.name = name;
  }
  cNome = this.name;
  atrib1 = '';
  atrib2 = '';
  atrib3 = '';
};

export function criarCliente(nome) {
  listaDeClientes[nome] = new Cliente(nome);
  return;
};

criarCliente("João");

export { listaDeClientes };