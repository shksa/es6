let userArray = process.argv.slice(3)
let output = {};
[output.username, output.email] = userArray
console.log(output) // {username: "jdoe", email: "john@doe.com"
