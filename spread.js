const numbers = process.argv.slice(2);
console.log(`The minimum of [${numbers}] is ${Math.min(...numbers)}`);

function spread(...args) {
  return Math.min(...args);
}

module.exports = spread;
