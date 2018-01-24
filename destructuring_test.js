const ds = require('./destructuring')

test('dsing empty array', () => {
  expect(ds([])).toEqual({ username: undefined, email: undefined })
})

test('dsing one element array', () => {
  expect(ds([2])).toEqual({ username: undefined, email: undefined })
})

test('dsing two element array', () => {
  expect(ds([2, 'foo'])).toEqual({ username: 'foo', email: undefined })
})

test('dsing three element array', () => {
  expect(ds([2, 'foo', 'foo@bar.com'])).toEqual({ username: 'foo', email: 'foo@bar.com' })
})
