'use strict';

const links = Array.from(document.getElementsByClassName('font-size'));
const [book__content] = document.getElementsByClassName('book__content');

links.forEach( item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('font-size_active');            
        }

        item.classList.add('font-size_active');

        book__content.classList.remove('book_fs-small');
        book__content.classList.remove('book_fs-big');

        if (item.classList.contains('font-size_small')) {
            book__content.classList.add('book_fs-small');
        }

        if (item.classList.contains('font-size_big')) {
            book__content.classList.add('book_fs-big');
        }
    })
})