const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailRezult = document.querySelector('#gmail_result')

const regExp = /^[\w\W0-9._%+-]+@gmail\.com$/
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailRezult.innerHTML = 'OK'
        gmailRezult.style.color = 'green'
    } else {
        gmailRezult.innerHTML = 'NOT OK'
        gmailRezult.style.color = 'red'
    }
}

const moveInnerBlock = document.querySelector('.inner_move_block')
const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let initialX = 0
let initialY = 0;
let direction = 'right'

const move = () => {
    const maxParentBlockX = parentBlock.offsetWidth - childBlock.offsetWidth;
    const maxParentBlockY = parentBlock.offsetHeight - childBlock.offsetHeight;

    if (direction === 'right' && initialX < maxParentBlockX) {
        initialX++;
        childBlock.style.left = `${initialX}px`;
    } else if (direction === 'right' && initialX === maxParentBlockX) {
        direction = 'down';
    } else if (direction === 'down' && initialY < maxParentBlockY) {
        initialY++;
        childBlock.style.top = `${initialY}px`;
    } else if (direction === 'down' && initialY === maxParentBlockY) {
        direction = 'left'
    } else if (direction === 'left' && initialX > 0) {
        initialX--;
        childBlock.style.left = `${initialX}px`;
    } else if (direction === 'left' && initialX === 0) {
        direction = 'up';
    } else if (direction === 'up' && initialY > 0) {
        initialY--;
        childBlock.style.top = `${initialY}px`;
    } else if (direction === 'up' && initialY === 0) {
        direction = 'right';
    }
    requestAnimationFrame(move);
};

parentBlock.onclick = () => {
    requestAnimationFrame(move);
};
// let initialX = 0
// let initialY = 0
// let direction = 1

// function move() {
//     if (initialX <= 0) {
//         direction = 1
//     } else if (initialX >= parentBlock.offsetWidth - childBlock.offsetWidth) {
//         direction = -1
//     }
//     initialX += direction
//     childBlock.style.left = `${initialX}px`
//     if (initialX > 0 && initialX < parentBlock.offsetWidth - childBlock.offsetWidth) {
//         requestAnimationFrame(() => move())
//     }
// }

// moveInnerBlock.addEventListener('click', function () {
//     move()
// })
const timeBlock = document.querySelector('#seconds')
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')

let seconds = 0
let timerInterval

function enableStartButton() {
    startButton.disabled = false
}
startButton.addEventListener('click', function startTimer() {
    startButton.disabled = true
    timerInterval = setInterval(() => {
        seconds++
        timeBlock.textContent = seconds
    }, 1000)
    stopButton.addEventListener('click', stopTimer)
    resetButton.addEventListener('click', resetTimer)
})

stopButton.addEventListener('click', () => {
    clearInterval(timerInterval)
    enableStartButton()
})

resetButton.addEventListener('click', () => {
    seconds = 0
    timeBlock.textContent = seconds
    clearInterval(timerInterval)
    enableStartButton()
})