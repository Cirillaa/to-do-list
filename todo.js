'use strict'

var input = document.querySelector('.input');
var sendButton = document.querySelector('.send-button');
var taskZone = document.querySelector('.task-zone');

sendButton.addEventListener('click', function(){
    createTask();
    input.value = '';

})

function createTask () {
    var taskAndButtons = document.createElement('div');
    var buttons = document.createElement('div');
    var checkMark = document.createElement('input');
    var task = document.createElement('div');
    var editButton = document.createElement('a');
    var removeButton = document.createElement('a');
    var removeImage = document.createElement('img');
    var editImage = document.createElement('img');

    checkMark.setAttribute('type', 'checkbox');
    task.innerHTML = input.value;
    removeButton.setAttribute('href', "#");
    editButton.setAttribute('href', '#');
    removeImage.setAttribute('src', '/img/trash.svg');
    editImage.setAttribute('src', '/img/editicon.svg');
    task.classList.add('task');
    taskAndButtons.classList.add('task-buttons');
    buttons.classList.add('buttons')

    taskZone.append(taskAndButtons);
    removeButton.appendChild(removeImage);
    editButton.appendChild(editImage);
    taskAndButtons.append(task);
    taskAndButtons.append(buttons);
    buttons.append(checkMark);
    buttons.append(editButton);
    buttons.append(removeButton);
    checkMark.classList.add('checkbox')

    removeButton.addEventListener('click', function(){
        taskAndButtons.remove();
    })
    editButton.addEventListener('click', function(){
        input.value = task.innerHTML;
        taskAndButtons.remove();
    })
    checkMark.addEventListener('click', function(){
        task.classList.toggle('disabled');
        if(task.classList.contains('disabled')){
            var end = Date.now() + (1 * 1000);

            var colors = ['#6CBEBF', '#E7D2CF'];

            (function frame() {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }
    })
}
