const spread = require('./spread')


test('test1', () => {
  expect(spread(1, 2, 3)).toBe(1)
})

test('test2', () => {
  expect(spread(1)).toBe(1)
})

test('test3', () => {
  expect(spread()).toBe(Infinity)
})
