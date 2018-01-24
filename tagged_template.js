
function convert(string) {
  return string.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;');
}

function html(strArr, username, comment) {
  return strArr[0] + convert(username) + strArr[1] + convert(comment) + strArr[2];
}


console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

module.exports = html;
