import * as fs from "node:fs";
//Importando o módulo necessário para usar os métodos readFyleSync() e writeFuleSync()
import PromptSync from "prompt-sync"; 
//Importando o módulo para usar o método 'prompt()'

const prompt = PromptSync();

class Cliente {
    constructor(email, fName, lName, pass) {
      this.fName = fName;
      this.lName = lName;
      this.email = email;
      this.pass = pass;
    }
    
  };

function criarCliente(lista = listaDeClientes) {
    // Pesquisar como requisitar dados do usuário no terminal usando o node.js.

    var email = prompt('Informe o e-mail: ');
    var fName = prompt('Informe o primeiro nome: ');
    var lName = prompt('Informe o último nome: ');
    var pass = prompt('Informe a senha: ');
    lista[email] = new Cliente(email, fName, lName, pass);
    return;
  };

function carregarListaDeClientes() {
    const buffer = fs.readFileSync("listaDeClientes.json");
    const stringContent = buffer.toString();
    const jsonContent = JSON.parse(stringContent);
    listaDeClientes = jsonContent;
    return;
};

let listaDeClientes 

carregarListaDeClientes();

// criarCliente("abc@teste.com","João", "de Jesus", 123);
criarCliente();

console.log(listaDeClientes);

fs.writeFile("listaDeClientes.json", JSON.stringify(listaDeClientes), (err) => {
    console.log(err);
});
