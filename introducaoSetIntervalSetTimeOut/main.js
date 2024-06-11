function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function() { // define um intervalo
    console.log(mostraHora());
}, 1000);

setTimeout(function() { // percorre até X segundos e para o invtervalo
    clearInterval(timer);
}, 11000);

console.log('');

setTimeout(function() { // após X segundos exibe a mensagem do console.log
    console.log('Hello world!');
}, 5000);