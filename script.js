let amountElement = document.querySelector(".js-amount")
let exchangeElement = document.querySelector(".js-exchange")
let formElement = document.querySelector(".js-form")
let euroElement = document.querySelector(".js-euro")

formElement.addEventListener("submit", (event)=> {
    event.preventDefault();


let amount = amountElement.value;
let exchange = exchangeElement.value;

let euro = amount * exchange;

euroElement.innerText = euro.toFixed(2);

});
