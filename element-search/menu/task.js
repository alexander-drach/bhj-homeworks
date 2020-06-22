'use strict';

let items = document.querySelectorAll('.menu__link');
let subMenu = document.querySelectorAll('.menu_sub');

for (let i = 0; i < items.length; i++) {
    items[i].onclick = function () {

        for (let i = 0; i < subMenu.length; i++) {
            subMenu[i].classList.remove('menu_active');
        }

        let currentSubMenu = this.nextElementSibling;
        
        if (currentSubMenu) {
            currentSubMenu.classList.add('menu_active');
            return false;
        }
    }
}