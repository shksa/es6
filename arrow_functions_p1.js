let inputs = process.argv.slice(2)
let output = inputs.map(x => x[0]).reduce((acc, x) => acc+x , '')
console.log(`[${inputs}] becomes "${output}"`);
