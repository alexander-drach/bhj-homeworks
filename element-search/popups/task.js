
    'use strict';

    let close = document.querySelectorAll('.modal__close');
    let modal_main = document.querySelector('#modal_main');
    let modal_success = document.querySelector('#modal_success');
    let modal = document.querySelectorAll('.modal');
    let btn_danger = document.querySelector('.btn_danger');

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
