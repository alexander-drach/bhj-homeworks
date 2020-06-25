let prew = document.querySelector('.slider__arrow_prev');
let next = document.querySelector('.slider__arrow_next');
let slides = document.querySelectorAll('.slider__item');
let dots = document.querySelectorAll('.slider__dot');

let count = 0;
dots[count].classList.add('slider__dot_active');

function hideSlide () {
    for ( let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slider__item_active');
    }
    for ( let i = 0; i < slides.length; i++) {
        dots[i].classList.remove('slider__dot_active');
    }
}

function showSlide () {
    slides[count].classList.add('slider__item_active');
    dots[count].classList.add('slider__dot_active');
}

prew.onclick = function () {
    hideSlide();
    count--;  
    if ( count < 0 ) {
       count = slides.length - 1;
    }
    
    showSlide();
}

next.onclick = function () {
    hideSlide();
    count++;  
    if ( count > slides.length - 1) {
       count = 0;
    }
    
    showSlide();
}

for ( let i = 0; i < dots.length; i++) {
    dots[i].onclick = function () {
        hideSlide();
        slides[i].classList.add('slider__item_active'); 
        dots[i].classList.add('slider__dot_active');
    }
}
