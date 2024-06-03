const alunos = ['Luiz', 'Maria', 'João'];
//mais utilizado o 'push' para adicionar dados no Array

console.log(alunos instanceof Array); //pergunta ao sistema se é um Array e retorna true ou false   

console.log(alunos.slice(0, 2)); //para consultar fatias de um Array - caso queira o último dado do Array, utilize -1

delete alunos[1]; //apaga um determinado dado de um Array sem apagar o índice do Array, deixando assim um
//índice completamente vazio no neio do Array

const removido1 = alunos.pop(); //a função 'pop' remove o último elemento do Array, podemos também - se for o caso - criar uma variável
//com o nome, por exemplo, "removido" para salvar o que foi removido do Array
const removido2 = alunos.shift(); //similar a função 'pop', porém remove no começo do Array

alunos.unshift('Luiza'); //adiciona na posição 0 do Array;

alunos.push('Luiza'); //adiciona ao fim do Array sem necessidade de saber o tamanho do Array
alunos.push('Fabio'); //adiciona ao fim do Array sem necessidade de saber o tamanho do Array

alunos[alunos.length] = 'Luiza'; //adiciona ao fim do Array sem necessidade de saber o tamanho do Array
alunos[alunos.length] = 'Fabio'; //adiciona ao fim do Array sem necessidade de saber o tamanho do Array
alunos[alunos.length] = 'Luana'; //adiciona ao fim do Array sem necessidade de saber o tamanho do Array

alunos[0] = 'Eduardo'; //altera Array da posição 0
alunos[3] = 'Luiza'; //adiciona ao fim Array SOMENTE QUANDO o tamanho é 3

console.log(alunos); //consulta Array
console.log(alunos[0]); //consulta o Array posição 0
console.log(alunos[3]); //consulta o Array posição 3