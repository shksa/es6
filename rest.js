function average(...nums){
	let sum = nums.reduce((acc, x) => acc + x , 0)
	let result = sum / nums.length
	return result
}

// module.exports = average

console.log('should work for more than two arguments', average(1, 2, 3) === 2)
console.log('should work for one argument', average(6) === 6)
