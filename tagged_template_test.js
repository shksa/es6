const html = require('./tagged_template');

test('test1', () => {
  const a = 'domenic';
  const b = '<dl> is a fun tag';
  expect(html`<b>${a} says</b>: "${b}"`).toBe('<b>domenic says</b>: "&lt;dl&gt; is a fun tag"');
});
