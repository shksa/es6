function makeImportant(string, numOfMarks = string.length){
	let result = string + "!".repeat(numOfMarks)
	return result
}

module.exports = makeImportant
