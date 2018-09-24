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

    if ( event.target.matches('button') ){
      if (!action) {
        inputNumber(text);
      }
      if (action === 'delete'){
        backspace();
      }
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' ||
        action === 'equals' ||
        action === 'decimal') {
        console.log('operator key!')
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
*/

const backspace = function(){
  if ( $('#display')[0].innerText !== 0 ){

    let arr = $('#display')[0].innerText.split("")

    arr.pop();
    $('#display')[0].innerText = arr.join("");
  }
}

    // console.log("key",key);
    // console.log("action:", action);
    // console.log("e:", event)
    // console.log('Text', key.innerText)
