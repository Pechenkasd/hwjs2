// fon checket
const phoneInput = document.querySelector('#phone_input')
const phoneNumber = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneNumber.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = 'red'
    }
}
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItem = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabContentItem.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}
const showTabContents = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabContentItem[index].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContents()
let currentIndex = 0;

const changeTabContent = () => {
    hideTabContent();
    showTabContents(currentIndex);
    currentIndex = (currentIndex + 1) % tabContentBlocks.length;
}
const intervalId = setInterval(changeTabContent, 3000);
tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItem.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContents(index)
                currentIndex = index
            }
        })
    }
}

