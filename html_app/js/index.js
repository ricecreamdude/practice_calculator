/*
Using code tutorial instructions from here:
https://medium.freecodecamp.org/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98

*/

/*
TO DO:

1. Using HTML Data Actions, create calculator functions off of jQuery
2. Complete use of numbers
3. Complete use functions

*/


//When everything is loaded...
$(
  $('button').on('click', event => {
    //passes event through to functions
    //Access target of event, or where the event is being triggered from
    //Access dataset of target
    //Access data-action of selected item.

    //Can also access innerText of event target
    const key = event.target;
    const action = key.dataset.action;
    const text = key.innerText;
    const calculator = document.querySelector('.calculator')

    //Used to track mathematics activities:
        //Addition
        //Multiplication
        //Subtraction
        //Division

    //Quality of Life Operations

    const previousKeyType = calculator.dataset.previousKeyType;
    //If the last operation was Equals, reset input

    if (calculator.dataset.previousKeyType === "equals"){
      $('#display')[0].innerText = text;
    }
    //Remove is-depresed from all elements
    $('button').removeClass('is-depressed');
    //Check to see if the event's target mathes 'Button'
    if ( event.target.matches('button') ){
      if (!action) {
        inputNumber(text);
        calculator.dataset.previousKeyType = "number"
      }
      if (action === 'delete'){
        backspace();
        calculator.dataset.previousKeyType = "delete"
      }
      if (action === 'decimal'){
        inputDecimal();
        calculator.dataset.previousKeyType = "decimal"
      }
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        //Change styling
        key.classList.add('is-depressed');
        //Assign previous key type
        calculator.dataset.previousKeyType = "operator";
        //Hold data for equation
        calculator.dataset.firstValue = $('#display')[0].innerText;
        calculator.dataset.operator = action;

        //Clear the input screen
        $('#display')[0].innerText = 0;
      }


      if (action === 'equals'){
        const x = calculator.dataset.firstValue;
        const y = $('#display')[0].innerText;
        const operator = calculator.dataset.operator;
        console.log('EQUALS')
        $('#display')[0].innerText = calculate(x, y, operator);
      }
    }
  })
)

//Inputting numbers onto Span
const inputNumber = function(num){
  if ($('#display')[0].innerText == 0) $('#display')[0].innerText = num
  else $('#display')[0].innerText += num;
}
/*
    TO DO
    1. If the value after the popped value is a decimal, remove that shit
    2. If decimcal is hit when no values are on the board, place a 0 in front
*/
const inputDecimal = function(){
  if ( $('#display')[0].innerText.indexOf(".") < 0 ) {
    console.log('Oh hai mark')
    $('#display')[0].innerText += "."
  }
}

const backspace = function(){
  if ( $('#display')[0].innerText !== 0 ){
    let arr = $('#display')[0].innerText.split("");
    arr.pop();
    $('#display')[0].innerText = arr.join("");
  }
}

const calculate = function(x,y,operator){
  let result = ''
  let n1 = parseFloat(x);
  let n2 = parseFloat(y);

  if (operator === 'add'){
    console.log('caluclate ADD')
    result = n1 + n2
  } else if (operator === 'subtract'){
    console.log('caluclate SUBTRACT')
    result = n1 - n2
  } else if (operator === 'divide'){
    console.log('caluclate DIVIDE')
    result = n1 / n2
  } else if (operator === 'multiply'){
    console.log('caluclate MULTIPLY')
    result = n1 * n2
  }

  return result;
}



// const updateCalculatorState = (key, calculator) => {
//   calculator.dataSet.previousKeyType = getKeyType(key);
// }
//
// const getKeyType = (key) => {
//   const ( action ) = key.dataset
//   if (!action) return 'number'
//   if (
//     action === 'add' ||
//     action === 'subtract' ||
//     action === 'multiply' ||
//     action === 'divide'
//   ) return 'oprator'
//   return action
// }

// const add = function(){
//
//   let num = $('#display')[0].innerText
//
//   if()
// }
    // console.log("key",key);
    // console.log("action:", action);
    // console.log("e:", event)
    // console.log('Text', key.innerText)
