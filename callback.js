//function declaration
/* function sayHello() {
  console.log('Hello')
} */

//function declaration -> function expression
/* const sayHello = function () {
  console.log('Hello')
} */

//function expression -> anonymous function
/* function () {
  console.log('Hello')
}
 */
//callback function not invoked
const executeCallback = (callback) => {
  //callback function invoked ()
  callback()
}

//when calling callback function, it is not invoked in call - no ()
/* executeCallback(sayHello) */

//callback as anonymous function - also known as inlining
executeCallback(function () {
  console.log('Hello')
})
