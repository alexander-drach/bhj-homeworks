'use strict';

const [chat] = document.getElementsByClassName('chat-widget');
const chat_widget = document.getElementById('chat-widget__messages');

const phrases = [
    'Вы хотите об этом поговорить?',
    'Мы лучшие!',
    'Вы можете нам доверять!',
];

const getCurrentTime = () => {
    return new Date().toTimeString().substr(0, 5);
}

const printRObotMessage = () => {
    let rand = Math.floor(Math.random() * phrases.length);
    let robotMessage = phrases[rand];
    let message = `
        <div class="message">
            <div class="message__time">${getCurrentTime()}</div>
            <div class="message__text">${robotMessage}</div>
        </div>`
    chat_widget.insertAdjacentHTML('beforeend', message);
}

chat.addEventListener('click', () => chat.classList.add('chat-widget_active') );

document.onkeydown = (e) => {
    const clientMessage = document.getElementById('chat-widget__input');    

    if (e.key.toLocaleLowerCase() === 'enter') {
        let message = `
            <div class="message message_client">
                <div class="message__time">${getCurrentTime()}</div>
                <div class="message__text">${clientMessage.value}</div>
            </div>`;
            
        chat_widget.insertAdjacentHTML('beforeend', message);
        clientMessage.value = '';
        setTimeout(printRObotMessage, 1000);
    }    
}