const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailRezult = document.querySelector('#gmail_result')

const regExp = /^[A-Z\a-z0-9._%+-]+@gmail\.com$/
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
let direction = 1

function move() {
    if (initialX <= 0) {
        direction = 1
    } else if (initialX >= parentBlock.offsetWidth - childBlock.offsetWidth) {
        direction = -1
    }
    initialX += direction
    childBlock.style.left = `${initialX}px`
    if (initialX > 0 && initialX < parentBlock.offsetWidth - childBlock.offsetWidth) {
        requestAnimationFrame(() => move(initialX, direction, parentBlock, childBlock))
    }
}

moveInnerBlock.addEventListener('click', function () {
    move(initialX, direction, parentBlock, childBlock)
})