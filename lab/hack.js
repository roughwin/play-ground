const request = require('request-promise');



async function p() {
  const num = Math.random().toString().slice(2, 6)
  const resp = await request({
    url: 'https://we.shanyue.tech/api/verifyCode',
    method: 'post',
    body: JSON.stringify({
      code: num
    })
  });
  console.log(num, resp)
}

async function r() {
  while(true) {
    await Promise.all(new Array(5).fill(p()))
  }
}

r();
