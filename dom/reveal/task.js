'use script';

//const viewportHeight = window.innerHeight;
const elements = Array.from(document.getElementsByClassName('reveal'));

window.addEventListener('scroll', function() {
    console.log (pageYOffset);
    elements.forEach( item => {
        if (pageYOffset > item.getBoundingClientRect().top || pageYOffset > item.getBoundingClientRect().bottom) {
            item.classList.add('reveal_active');
        }
    })
})

