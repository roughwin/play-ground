const Lame = require('node-lame').Lame;

// const decoder = new Lame({
//   output: './wav.wav',
// }).setFile('./v.mp3');

// decoder.decode().then(console.log).catch(console.log)

const request = require('request-promise')
async function getBaiduAiAccessToken() {
  const params = [
    'grant_type=client_credentials',
    'client_id=XXyw2bPGn1Xj207dblrXCcye',
    'client_secret=',
  ];
  const result = await request({
    url: `https://aip.baidubce.com/oauth/2.0/token?${params.join('&')}`,
    method: 'post',
  })
  const x = JSON.parse(result);
  if (x.access_token) {
    baiduAccessKey = x;
  }
  console.log(JSON.parse(result))
}
// getBaiduAiAccessToken()

const baiduAccessToken = ``;

async function uploadReq() {
  const result = await request({
    url: `https://aip.baidubce.com/rpc/2.0/session/offline/upload/asr?access_token=${baiduAccessToken}`,
    method: 'post',
    json: true,
    body: {
      appId: 14256038,
      callId: '122',
      companyName: 'xrss',
      agentFileUrl: '',
      suffix: 'wav',
    }
  })
  console.log(result)
  // const x = JSON.parse(result)
  // consol.log(result, x)
}
async function queryReq() {
  const result = await request({
    url: `https://aip.baidubce.com/rpc/2.0/search/info?access_token=${baiduAccessToken}`,
    method: 'post',
    json: true,
    body: {
      category: 'OFFLINE_ASR_RESULT',
      paras: {
        appId: 14256038,
        callId: '123'
      }
    }
  });
  console.log(result)
}
// uploadReq();
queryReq();