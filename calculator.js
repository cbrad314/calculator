let displayValue = 0;
let firstValue = null;
let secondValue = null;
let operatorValue = null;
let calculatedValue;
const display = document.querySelector('.display')
const allButtons = document.querySelectorAll('button')
const allNumberButtons = document.querySelectorAll('.number')
const allOperatorButtons = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const compute = document.querySelector('.compute')

function updateDisplay(text) {
  display.textContent = text;
}

allNumberButtons.forEach(button => {button.addEventListener('click',updateOperands)});

allOperatorButtons.forEach(button => button.addEventListener('click',storeOperator));
clear.addEventListener('click', clearMemory);
compute.addEventListener('click',computeValues);

function computeValues(){
  if (firstValue&&secondValue&&operatorValue)
    operate(firstValue,secondValue,operatorValue)
    updateDisplay(calculatedValue);
};

function clearMemory() {
  firstValue = null;
  secondValue = null;
  operatorValue = null; 
  displayValue = 0;
  calculatedValue = null;
  updateDisplay(displayValue);
  };

function updateOperands(event){
  if (!firstValue){
    firstValue = event.target.textContent;
    updateDisplay(firstValue);
  }
  else if (firstValue&&!operatorValue){
    firstValue += event.target.textContent;
    updateDisplay(firstValue);
  }
  else if (firstValue&&operatorValue&&!secondValue){
    secondValue = event.target.textContent;
    updateDisplay(secondValue);
  }
  else if (firstValue&&operatorValue&&secondValue&&!calculatedValue){
    secondValue += event.target.textContent;
    updateDisplay(secondValue);
  }
  else {
    clearMemory()
    firstValue = event.target.textContent;
    updateDisplay(firstValue);
  }
};

function storeOperator(event){
  if (firstValue&&!secondValue){
    operatorValue = event.target.textContent;}
};

const add = function(a,b) {
	return parseInt(a)+parseInt(b);
};

const subtract = function(a,b) {
  return a-b;	
};

// const sum = function(array) {
// 	return array.reduce((sum,item)=>sum + item,0)
// };

function multiply(a,b) {
  // return array.reduce((total,item)=> total*item,1)
  return a*b;
}

function divide(a,b) {
  return a/b;
  // return array.reduce((total,item)=> total/item)
}

// const power = function(a,b) {
//   return Math.pow(a,b);
	
// };

// const factorial = function(a) {
//   if (a === 0) return 1;
//   let product = 1;
//   for (let i = a; i > 0; i--) {
//     product *= i;
//   }
//   return product;
//  };

 //Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

 function operate(a,b,operator) {
  switch (operator) {
  case '+':
    calculatedValue = add(a,b);
    break;
  case '-':
    calculatedValue = subtract(a,b);
    break;
  case 'x':
    calculatedValue = multiply(a,b);
    break;
  case '/':
    calculatedValue = divide(a,b);
    break;
  }
  return calculatedValue;
 };


 



  


 



// Do not edit below this line
// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial
// };
