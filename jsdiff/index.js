const babelParser = require('@babel/parser')
const fs = require('fs');
const path = require('path');

const strA = fs.readFileSync(path.join(__dirname, 'demo-a.js')).toString();

const strB = fs.readFileSync(path.join(__dirname, 'demo-b.js')).toString();

const r1 = babelParser.parse(strA)
const r2 = babelParser.parse(strB);

fs.writeFileSync(path.join(__dirname, 'out1.json'), JSON.stringify(r1, '', 2))
fs.writeFileSync(path.join(__dirname, 'out2.json'), JSON.stringify(r2, '', 2))

