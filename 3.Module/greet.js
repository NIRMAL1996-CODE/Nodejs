function greet(username){
  console.log("Hello", username);
}

//tell other file tht ypu can also use the same function lets leran how
//so this is how we can tell files tht you can have access to function or variables

//we use module.exports = greet; to export it, so other files can access it.
module.exports =greet;

// These two lines use the old/CommonJS style, which is still the default in Node.js:
// const greet = require("./greet");
// module.exports = greet;
// It's not outdated — just the older standard.
// New style uses import/export (ESM).