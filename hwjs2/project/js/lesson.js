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
const godAndPeople = async() =>{
    try{
        const response = await fetch('../data/person.json')
        const data = await response.json()
        // console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
godAndPeople()
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
// converter
const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')
const euroInput = document.querySelector('#eur')

const convertor = (element, targetElement, targetElement2) => {
    element.oninput = () => {
        const visionCash = async () => {
            try {
                const response = await fetch('../data/converter.json')
                const data = await response.json()
                if (element.id === 'som') {
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetElement2.value = (element.value / data.euro).toFixed(2)
                } else if (element.id === 'usd') {
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    targetElement2.value = (element.value / data.euroToDollar).toFixed(2)
                } else if (element.id === 'eur') {
                    targetElement.value = (element.value * data.euro).toFixed(2)
                    targetElement2.value = (element.value * data.euroToDollar).toFixed(2)
                }

                if (element.value === '') {
                    targetElement.value = ''
                    targetElement2.value = ''
                }
            } catch (error) {
                console.log(error)
            }
        }
        visionCash()
    }
}
convertor(somInput, usdInput, euroInput)
convertor(usdInput, somInput, euroInput)
convertor(euroInput, somInput, usdInput)

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
let  currentCardId = 1 
const updateCard = async(userId) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
        const data = await response.json()
        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color:${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `
    }catch(error){
        console.log('error')
    }
}
btnNext.onclick = () => {
    currentCardId = currentCardId < 200 ? currentCardId + 1 : 1
    updateCard(currentCardId)
}

btnPrev.onclick = () => {
    currentCardId = currentCardId > 1 ? currentCardId - 1 : 200
    updateCard(currentCardId)
}
updateCard(currentCardId)

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => console.log(data))

//whether
const citySearchInput = document.querySelector('.cityName')
const cityName = document.querySelector('.city')
const tempName = document.querySelector('.temp')
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_ID = 'e417df62e04d3b1b111abeab19cea714'

const citySearch = () => {
    citySearchInput.oninput = async(event) =>{
        const response = await fetch(`${BASE_URL}?q=${event.target.value}&appid=${API_ID}`)
        const data = await response.json()       
            cityName.innerHTML = data.name || 'City is not defaided'
            tempName.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;' + 'C' : ''
    }
}

citySearch()
//otional chaining ?.
