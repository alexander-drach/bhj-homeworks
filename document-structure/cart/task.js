'use strict';

const btnQuantity = Array.from(document.getElementsByClassName('product__quantity-control'));
const btnAddProduct = Array.from(document.getElementsByClassName('product__add'));
const [basket] = document.getElementsByClassName('cart__products');

const minusQuantity = item => {
    item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent--;
}

const plusQuantity = item => {
    item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent++;
}

btnQuantity.forEach( item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('product__quantity-control_dec')) {
            minusQuantity(item);
        }
        if (item.classList.contains('product__quantity-control_inc')) {
            plusQuantity(item);
        }
    })
});

btnAddProduct.forEach( item => {
    item.addEventListener('click', () => {
        const cardImageSrc = item.closest('.product').querySelector('img').getAttribute('src');
        const cardQuantity = item.closest('.product').querySelector('.product__quantity-value').textContent;
        console.log(cardQuantity);
        basket.insertAdjacentHTML('afterbegin', 
        `<div class="cart__product" data-id="1">
            <img class="cart__product-image" src="${cardImageSrc}">
            <div class="cart__product-count">${cardQuantity}</div>
        </div>`)
    })
})