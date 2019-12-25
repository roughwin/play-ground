const { xsltProcess, xmlParse } = require('xslt-processor');
const fs = require('fs');
const path = require('path');
const xmldom = require('xmldom');
const omml2mathml = require('omml2mathml')


const xmlString = fs.readFileSync(path.join(__dirname, 'demo.xml')).toString();

const doc = new xmldom.DOMParser().parseFromString(xmlString);
const math = omml2mathml(doc);
const result = math.outerHTML.replace(/\s*/mg, '');

console.log(result);
fs.writeFileSync(path.join(__dirname, 'out.xml'), result)


