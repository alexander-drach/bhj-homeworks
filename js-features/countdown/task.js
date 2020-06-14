'use strict';

let timer = document.getElementById('timer');

const id = setInterval( () => timer.textContent--, 1000);

const stop = () => {
    clearInterval(id);    
    alert('Вы победили в конкурсе!');    
}

setTimeout (stop, 59000);