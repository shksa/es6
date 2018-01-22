
test('test1', () => {
	nums = [1]
	expect(Math.min(...nums)).toBe(1)
})

test('test1', () => {
	nums = []
	expect(Math.min(...nums)).toBe(Infinity)
})
