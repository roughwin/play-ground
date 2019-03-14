const fs = require('fs');
const parser = require('./parse_curl');

const text = fs.readFileSync('./curl2.txt', 'utf8');


// console.log(text.length)
const reqArr = text.split('\n').map(parser).filter(a => a);

const xhr = reqArr.filter((req) => {
  const { url } = req;
  if (url && url.match('https://weixin.citicsinfo.com/reqxml')) {
    return req;
  } else {
    console.log(url)
  }
})

const bodys = xhr.map(req => {
  return parseBody(req.body)
})

console.log(bodys)

function parseBody(bodyStr = '') {
  const arr = bodyStr.split('&');
  return arr.reduce((result, x) => {
    [key, value] = x.split('=');
    if (!key) return result;
    result[key] = value;
    return result;
  }, {})
}
function fun() {
  console.log('this.a', this.a);
}

const x = {
  a: 'x a'
}

global.a = 'global a'
const funx = fun.bind(x);

funx();
fun();

const y = {
  f: funx,
  a: 'y a'
}

y.f()
