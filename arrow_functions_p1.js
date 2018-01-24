// const inputs = process.argv.slice(2)
// const output = inputs.map(x => x[0]).reduce((acc, x) => acc + x, "")
// console.log(`[${inputs}] becomes "${output}"`)

function foo(inputs) {
  const output = inputs.map(x => x[0]).reduce((acc, x) => acc + x, '');
  return output;
}

module.exports = foo;
