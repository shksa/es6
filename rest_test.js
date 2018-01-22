average = require('./rest')

// console.log('should work for more than two arguments', average(1, 2, 3) === 2)
// console.log('should work for one argument', average(6) === 6)

test('average of one number', () => {
	expect(average(1)).toBe(1)
})

test('average of more than one number', () => {
	expect(average(1, 2, 3)).toBe(2)
})
