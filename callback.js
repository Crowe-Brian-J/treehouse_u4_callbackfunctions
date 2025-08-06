function sayHello() {
  console.log('Hello')
}

//callback function not invoked
const executeCallback = (callback) => {
  //callback function invoked ()
  callback()
}

//when calling callback function, it is not invoked in call - no ()
executeCallback(sayHello)
