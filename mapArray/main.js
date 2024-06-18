// Dobre os números:

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

console.log('');

// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(objeto => objeto.nome);
console.log(nomes);

const idades = pessoas.map(objeto => ({ idade: objeto.idade }));
console.log(idades);

const comIds = pessoas.map(function(objeto, indice) {
    // objeto.id = indice + 1;
    // Como a função map altera o objeto/array origianl é recomandado criar uma cópia do objeto/array por segurança
    const newObjeto = { ...objeto };
    newObjeto.id = indice + 1;
    return newObjeto;
});
console.log(comIds);

