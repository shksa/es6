const midpoint = require('./default_arguments')

test('average of undef and undef', () => {
  expect(midpoint(undefined, undefined)).toBe(0.5)
})

test('average of undef and 1', () => {
  expect(midpoint(undefined, 1)).toBe(0.5)
})

test('average of 1 and undef', () => {
  expect(midpoint(1, undefined)).toBe(1)
})
