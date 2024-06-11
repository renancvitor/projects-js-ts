function relogio() {
    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function startTime() {
        timer = setInterval(function() {
            segundos ++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(event) {
        const elemento = event.target;
    
        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startTime();
        }
    
        if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    
        if (elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
    
    // iniciar.addEventListener('click', function(event) {
    //     relogio.classList.remove('pausado');
    //     clearInterval(timer);
    //     startTime();
    // });
    
    // pausar.addEventListener('click', function(event) {
    //     clearInterval(timer);
    //     relogio.classList.add('pausado');
    // });
    
    // zerar.addEventListener('click', function(event) {
    //     clearInterval(timer);
    //     relogio.innerHTML = '00:00:00';
    //     segundos = 0;
    // });
}
relogio();

