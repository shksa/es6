// let userArray = process.argv.slice(3)
// let output = {};
// [output.username, output.email] = userArray
// console.log(output) // {username: "jdoe", email: "john@doe.com"}

function destructuring(userArray) {
  const output = {};
  [, output.username, output.email] = userArray;
  return output;
}

module.exports = destructuring;
