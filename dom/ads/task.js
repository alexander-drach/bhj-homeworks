const phrases = document.getElementsByClassName('rotator__case');
let i = 0;

setInterval(function () {    
    phrases[i].classList.remove('rotator__case_active');
    i++;

    if (i > phrases.length - 1) {
        i = 0;
    }

    phrases[i].classList.add('rotator__case_active');    
}, 1000);