const foo = require('./arrow_functions_p1');

test('test1', () => {
  expect(foo(['all', 'notall', 'lice'])).toBe('anl');
});

test('test2', () => {
  expect(foo(['', '', ''])).toBe('undefinedundefinedundefined');
});

test('test3', () => {
  expect(foo(['', 'all', 'notall'])).toBe('undefinedan');
});
