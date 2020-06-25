
    'use strict';

    let close = document.querySelectorAll('.modal__close');
    let modal_main = document.getElementById('modal_main');
    let modal_success = document.getElementById('modal_success');
    let modal = document.querySelectorAll('.modal');
    let [btn_danger] = document.getElementsByClassName('btn_danger');

    modal_main.classList.add('modal_active');

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            this.closest('.modal').remove('modal_active');
        }
    }        
    
    btn_danger.onclick = function () {
        modal_main.classList.remove('modal_active');
        modal_success.classList.add('modal_active');
    }
