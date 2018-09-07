const fs = require('fs')

let data

try {
  data = fs.readFileSync('cookies.json', 'utf8');
} catch {
}

console.log(data)