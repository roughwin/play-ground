const curlconverter = require('curlconverter')
const curlparser = require('curl-parser-js')

const re = curlparser.parse()
console.log(Object.keys(re.headers))
