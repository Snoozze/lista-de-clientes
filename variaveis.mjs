// variables.js

export async function carregarVariaveis() {
    const variables = await fetch('variaveis.js');
    return variables;
  }
  
  export async function atualizarVariaveis(variables) {
    const response = await fetch('variaveis.js', {
      method: 'PUT',
      body: JSON.stringify(variables),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.ok;
  }
  