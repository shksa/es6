function makeImportant(string, numOfMarks = string.length) {
  const result = string + '!'.repeat(numOfMarks);
  return result;
}

module.exports = makeImportant;
