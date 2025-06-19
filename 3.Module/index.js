//this will allow us to use that functionfrom that (index.js) file,and we can use it here.
//getting that function right here
//require() is used in Node.js to import code from built-in, third-party, or custom modules. and to import the value. Finally, console.log(greet); prints the message to the console.
const greet =require("./greet");

// greet("Nirmal");

const {person1, person2, person3} =require("./peoples");
greet(person1);
greet(person2);
greet(person3);
