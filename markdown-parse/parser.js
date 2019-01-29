var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
const fs = require('fs');

const str = fs.readFileSync('./test.md', 'utf8');
var result = md.parse(str);

const x = JSON.stringify(result, ' ', 2);
fs.writeFileSync('a.json', x)

console.log(result)

// browser without AMD, added to "window" on script load
// Note, there is no dash in "markdownit".
// var md = window.markdownit();
// var result = md.render('# markdown-it rulezz!');