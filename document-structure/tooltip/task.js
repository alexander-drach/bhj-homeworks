'use strict';

const links = Array.from(document.getElementsByClassName('has-tooltip'));

links.forEach( item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        let toolTipText = item.getAttribute('title');
        if (item.querySelector('.tooltip')) {
            item.removeChild( item.querySelector('.tooltip') );
        } else {
            item.insertAdjacentHTML('afterbegin', `<div class="tooltip">${toolTipText}</div>`);
        }  
    })
})