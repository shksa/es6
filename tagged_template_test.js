let fns = require('./tagged_template')
let html = fns['html']
let convert = fns['convert']


test('test1', () => {
	let a = "domenic"
	let b = "<dl> is a fun tag"
	expect(html`<b>${a} says</b>: "${b}"`).toBe('<b>domenic says</b>: "&lt;dl&gt; is a fun tag"')
})
