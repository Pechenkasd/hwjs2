const store = document.querySelector('.store')
const card = document.querySelector('#card_block')

const BASE_URL = 'https://fakestoreapi.com/products/'
// const cardStore = async() => {
//     try{
//         const response = await fetch(`https://fakestoreapi.com/products/${1}`)
//         const data = await response.json()
//         card.innerHTML = `
//         <span>${data?.category}</span>
//         <img src="${data?.image}">
//         <h3>${data?.title}</h3>
//         <p>${data?.price}</p>
//         `
//     }catch(error){
//         console.log("Error")
//     }
// }
// cardStore()

const cardStore = async () => {
    try {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    card.innerHTML = ''
    data.forEach((product) => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card_block')
        cardElement.innerHTML = `
        <h3>${product.title}</h3>
        <p>${product.price}$</p>
        <img src="${product.image}" alt="${product.title}">
        `
        card.appendChild(cardElement)
    })
    } catch (error) {
        console.log('Error:', error)
    }
}
cardStore();
