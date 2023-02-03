let displayValue = 0;
let firstValue = null;
let secondValue = null;
let operatorValue = null;
let calculatedValue;
let lastOperator;
const display = document.querySelector('#display ')
const aggregatedDisplay = document.querySelector('#aggregator')
const aggregator = [];
const allButtons = document.querySelectorAll('button')
const allNumberButtons = document.querySelectorAll('.number')
const allOperatorButtons = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const compute = document.querySelector('#compute')


function updateDisplay(displayValue) {
  display.textContent = displayValue;
}

function updateDisplays(displayValue,aggregatorValue,type){
  updateDisplay(displayValue);
  updateAggregator(aggregatorValue,type);
}
function updateAggregator(aggregatorValue, type) {
  if (!type||type ==='push') {aggregator.push(aggregatorValue);}
  else if (type==='clear') {aggregator.splice(0,aggregator.length);}
  else if (type==='change') {aggregator.splice(aggregator.length-1,1,aggregatorValue);}
  else if (type==='error') {aggregator.splice(0,aggregator.length,aggregatorValue);}
  updateAggregatedDisplay(aggregator);
}

function updateAggregatedDisplay(text){
  aggregatedDisplay.textContent = aggregator.join(' ');
}

allNumberButtons.forEach(button => {button.addEventListener('click',updateOperands)});

allOperatorButtons.forEach(button => button.addEventListener('click',(event) => lastOperator = event.target.textContent));
allOperatorButtons.forEach(button => button.addEventListener('click',runOperator));

clear.addEventListener('click', clearMemory);
// compute.addEventListener('click',computeValues);


function computeValues(){
  if (firstValue&&secondValue&&operatorValue){
    operate(firstValue,secondValue,operatorValue);
    if (lastOperator === '='){
      updateDisplays(calculatedValue,'= ' + calculatedValue,'push')
    }
    else if (lastOperator !== '=') {updateDisplays(calculatedValue, lastOperator,'push');}
    firstValue = calculatedValue;
    calculatedValue = null;
    return secondValue = null;

  }
  else updateDisplays('error','error','error');
};

function clearMemory() {
  firstValue = null;
  secondValue = null;
  operatorValue = null; 
  displayValue = 0;
  calculatedValue = null;
  updateDisplays(displayValue,displayValue,'clear');
  };

function updateOperands(event){
  if (!firstValue){
    firstValue = event.target.textContent;
    updateDisplays(firstValue, firstValue,'push');
  }
  else if (firstValue&&!operatorValue){
    firstValue += event.target.textContent;
    updateDisplays(firstValue, firstValue,'change');
  }
  else if (firstValue&&operatorValue&&!secondValue){
    secondValue = event.target.textContent;
    updateDisplays(secondValue,secondValue,'push');
  }
  else if (firstValue&&operatorValue&&secondValue&&!calculatedValue){
    secondValue += event.target.textContent;
    updateDisplays(secondValue,secondValue,'change');
  }
  else {
    // clearMemory()
    // firstValue = event.target.textContent;
    updateDisplays('well this is unexpected');
  }
};

function runOperator(event){
  const newOperator = (event.target.textContent ==='=')? operatorValue : event.target.textContent;
  if (!newOperator&&!firstValue) {
    return updateDisplays('maybe try a number first, genius','','clear')}
  else if (!secondValue&&operatorValue){
    updateAggregator(newOperator,'change');
    operatorValue = newOperator;
  }
  else if (!secondValue&&!operatorValue){
    updateAggregator(newOperator,'push');
    operatorValue = newOperator;
  }
  else {
    operatorValue = newOperator;
    computeValues();}
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
    if (b==='0'){calculatedValue = 'nice try, bub'}
    else {calculatedValue = divide(a,b);}
    break;
  default:
    calculatedValue = 'unexpected operation'
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
