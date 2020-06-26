'use strict';

/**
 * ищу элементы с помощью  getElementsByClassName, а не через querySelector
 * потому что в предыдущем ДЗ было замечание и сказали искать через getElementsByClassName
 * т.к. он быстрей работает и использовать деструктуризацию, 
 * хотя мне кажется проще через querySelector искать,
 * но чтобы не было замечания оставляю пояснение и делаю как сказали)
 */

let dropdown = Array.from(document.getElementsByClassName('dropdown'));
let links = Array.from(document.getElementsByClassName('dropdown__link'));

links.forEach( function (item) {
        item.onclick = function() {
            this.closest('.dropdown').childNodes[1].textContent = item.textContent;
        }
    }
);

dropdown.forEach ( function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        if ( item.childNodes[3].classList.contains('dropdown__list_active') ) {
            item.childNodes[3].classList.remove('dropdown__list_active');
        } else {
            item.childNodes[3].classList.add('dropdown__list_active');
        }
    });
});
