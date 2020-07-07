'use strict';

const taskList = document.getElementById('tasks__list');
const [btnAdd] = Array.from(document.getElementsByClassName('tasks__add'));

const addTaskEnter = (e) => {
    const [form] = document.getElementsByClassName('tasks__control');
    form.addEventListener('submit', e => e.preventDefault());
    const input = document.getElementById('task__input');

    if (e.key === 'Enter') {
        if (input.value) {
            taskList.insertAdjacentHTML('beforeEnd', 
            `<div class="task">
                <div class="task__title">
                ${input.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`            
            );
            input.value = '';

            const closes = Array.from(document.getElementsByClassName('task__remove'));

            closes.forEach( item => {
                item.onclick = (e) => {
                    e.preventDefault();
                    item.closest('.task').remove();
                }
            })
        }
    }    
}

const addTaskBtn = (e) => {
    const [form] = document.getElementsByClassName('tasks__control');
    form.addEventListener('submit', e => e.preventDefault());
    const input = document.getElementById('task__input');

        if (input.value) {
            taskList.insertAdjacentHTML('beforeEnd', 
            `<div class="task">
                <div class="task__title">
                ${input.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`            
            );
            input.value = '';

            const closes = Array.from(document.getElementsByClassName('task__remove'));

            closes.forEach( item => {
                item.onclick = (e) => {
                    e.preventDefault();
                    item.closest('.task').remove();
                }
            })
        }
}

document.onkeydown = (e) => {
    addTaskEnter(e);
}

btnAdd.onclick = (e) => {
    addTaskBtn(e);
}

