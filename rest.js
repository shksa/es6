function average(...nums){
	let sum = nums.reduce((acc, x) => acc + x , 0)
	let result = sum / nums.length
	return result
}

module.exports = average
