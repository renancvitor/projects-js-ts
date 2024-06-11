function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('Erro: x e y devem ser números.');
    }
    return x + y;
}

try { // executada para verificar error
    console.log(soma(1, 2));
    console.log(soma('a', 2));
} catch (err) { // executado apenas quando existem erros
    // console.log(err); - no frontend não é legal exibir o erro para o usuário, no backend TALVEZ não tenha problema
    console.log('Erro: x e y devem ser números.');
}

console.log('');

try {
    console.log('Eu abri um arquivo');
    console.log('Eu manipulei o arquivo e gerou erro');
    console.log('Eu fechei o arquivo');
} catch (err) {
    console.log('Tratando o erro');
} finally { // sempre é executado independente de ter dado erro
    console.log('FINALLY: Eu fechei o arquivo');
}

console.log('');

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-04-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch (err) {
    console.log('Esperando instância de Date.');
} finally {
    console.log('Tenha um ótimo dia!! :D');
}

