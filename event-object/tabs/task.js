'use strict';

let tabTitles = document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('.tab__content');

tabTitles.forEach(function (item) {
    item.onclick = function () {
        const arrayTitlies = Array.from(this.closest('.tab__navigation').querySelectorAll('.tab'));
        const arrayContents = Array.from(this.closest('.tabs').querySelectorAll('.tab__content'));
        const index = arrayTitlies.indexOf(this);
        
        arrayTitlies.forEach(function (item) { item.classList.remove('tab_active') } );
        arrayContents.forEach(function (item) { item.classList.remove('tab__content_active') } );

        arrayTitlies[index].classList.add('tab_active');
        arrayContents[index].classList.add('tab__content_active');
    }
});

