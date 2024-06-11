const inputNovaTarefa = document.querySelector('.input-nova-tarefa');
const buttonAddTarefa = document.querySelector('.button-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputNovaTarefa.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        if (!inputNovaTarefa.value) return;
        criaTarefa(inputNovaTarefa.value);
    }
});

function limpaInput() {
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

buttonAddTarefa.addEventListener('click', function() {
    if (!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa.value);
});

document.addEventListener('click', function(event) {
    const elemento = event.target;

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    // const liTarefas = tarefas.querySelectorAll('li');
    // const listaTarefas = [];

    // for (let tarefa of liTarefas) {
    //     let tarefaTexto = tarefa.innerText;
    //     tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    //     listaTarefas.push(tarefaTexto);
    // }

    // const tarefasJSON = JSON.stringify(listaTarefas);
    // localStorage.setItem('tarefas', tarefasJSON);
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    if (liTarefas.length === 0) return; // Verificar se há elementos antes de iterar

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adcTarefasSalvas() {
    // const tarefas = localStorage.getItem('tarefas');
    // const listaTarefas = JSON.parse(tarefas);
    
    // for (let tarefa of listaTarefas) {
    //     criaTarefa(tarefa);
    // }
    const tarefasSalvas = localStorage.getItem('tarefas');
    if(tarefasSalvas) {
        const listaTarefas = JSON.parse(tarefasSalvas);
        for (let tarefa of listaTarefas) {
            criaTarefa(tarefa);
        }
    }
}
adcTarefasSalvas();