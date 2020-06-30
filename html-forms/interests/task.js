'use strict';

const checkboxes = Array.from(document.querySelectorAll('.interest__check'));

checkboxes.forEach( checkbox => {
    const checkParent = checkbox.closest('.interest');
    if ( checkParent.querySelector('.interests') ) {
        checkbox.addEventListener('change', () => {
            const checkChilden = Array.from( checkParent.querySelectorAll('.interests .interest__check') );
            if ( checkbox.checked ) {
                checkChilden.forEach(
                    item => item.checked = true
                )
            } else {
                checkChilden.forEach(
                    item => item.checked = false
                )
            }
        });
    }
})