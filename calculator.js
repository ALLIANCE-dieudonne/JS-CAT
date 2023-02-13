const operator = document.getElementById('op').value
const fistNumber = document.getElementById('firstNum').value
const secondNumber = document.getElementById('secnum').value
const par = document.getElementById('par')
const sum =``;
const product =``;
const div =``;
const add =``;

simplCalc = (firstNum, secondNumber) => {
    if (operator == '*') {
        product = firstNum * secondNumber
        par.innerHTML = ` The product is ${product}`
    }
    else if (operator == '/') {
        div = firstNum / secondNumber
        par.innerHTML =`the quotient is ${div}`
    }
    else if (operator == '+') {
        sum = firstNum + secondNumber
        par.innerHTML = `the sum is ${sum}`
    }
    else if (operator == '-') {
        add = firstNum - secondNumber
        par.innerHTML = `the difference is ${add}`
    }
    else {
        alert(`Invalid operator`)
    }

}