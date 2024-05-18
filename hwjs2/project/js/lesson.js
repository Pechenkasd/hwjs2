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

const card = document.querySelector(".card")
const xhr = new XMLHttpRequest()
xhr.open('GET', '../data/person.json', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText)
        console.log(response)
    }
}
xhr.send()
// const name = ""
// const color_hair = ""
// const color_eyes = ""
// const hair_length = ""
// const name_japan = ""
// const panteon = ""
// const weapon = ""
// const person_photo = ""
// card.addEventListener('click', function() {
//     // Perform your action here
//     console.log('Card clicked');

//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', '../data/person.json', true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log('POST request successful');
//         }
//     };

//     const data = JSON.stringify({
//         name,
//         color_hair,
//         color_eyes,
//         hair_length,
//         name_japan,
//         panteon,
//         weapon
//     });
//     xhr.send(data);
// });
