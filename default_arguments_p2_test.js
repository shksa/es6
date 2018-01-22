makeImportant = require('./default_Arguments_p2')

test('test1', () => {
	expect(makeImportant('hello')).toBe('hello!!!!!')
})

test('test2', () => {
	expect(makeImportant('hello', 2)).toBe('hello!!')
})
