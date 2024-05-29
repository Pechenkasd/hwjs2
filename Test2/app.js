const regExp = /^[0-9]/
const extractNumbers = (str)=> {
    return str.match(regExp)
}
extractNumbers("a1fg5hj6") // вернёт [1, 5, 6]
console.log(extractNumbers("a1fg5hj6"))
//3
const store = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      data.forEach(product => {
        console.log(product.title);
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
store();
//4
const wrapper = document.querySelector('.wrapper')
wrapper.addEventListener('click', (event)=> {
  if (event.target.tagName === 'BUTTON') {
    const buttonColor = event.target.style.backgroundColor;
    document.body.style.backgroundColor = buttonColor;
  }
})

let count = 0;
let intervalId;
const startCounting = ()=> {
  document.querySelector("count").innerHTML = count;
  intervalId = setInterval(increment, 100);
}

const increment = ()=> {
  count++;
  document.querySelector("count").innerHTML = count;
  if (count === 100) {
    clearInterval(intervalId);
  }
}
startCounting();


const person = async() =>{
    try{
        const response = await fetch('data.json')
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
person()