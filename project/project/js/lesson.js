// fon checket
const phoneInput = document.querySelector('#phone_input')
const phoneNumber = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneNumber.onclick = () =>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = 'green'
    }else{
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = 'red'
    }
}
