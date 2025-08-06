function sayHello() {
  console.log('Hello')
}

//callback function not invoked
const executeCallback = (callback) => {
  //callback function invoked ()
  callback()
}
