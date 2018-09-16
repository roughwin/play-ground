
  const box = document.getElementById('root')
  // box.innerText = JSON.stringify({heel: 'haha'}, null, 2);
  let v = '124';
  
  const x = window.location.search.slice(1);

  const xxx = parse_query_string(x);

  fetch(`/api/page/code?code=${xxx.code}`, {
    method: 'get',
  }).then(function(r) {
    return r.json();
  }).then(function(obj) {
    log(JSON.stringify(obj, null, 2))
  });
  const currentUrl = window.location.href.split('#')[0];
  log(currentUrl);
  fetch(`/api/page/signature`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: currentUrl,
    })
  }).then(function(r) {return r.json()})
  .then(init);

function log(txt) {
  const d = document.createElement('div');
  d.innerText = txt;
  document.body.appendChild(d);
}

function init(obj) {
  log(JSON.stringify(obj, null, 2));
  log(currentUrl)
  log(window.location.href);
  const options = {
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: obj.appId, // 必填，公众号的唯一标识
    timestamp: obj.timestamp, // 必填，生成签名的时间戳
    nonceStr: obj.noncestr, // 必填，生成签名的随机串
    signature: obj.signature,// 必填，签名
    jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
    ] // 必填，需要使用的JS接口列表
  };
  log(JSON.stringify(options, null, 2));
  wx.config(options);
  wx.error(function(res){
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    log(JSON.stringify(res, null, 2));
  });
  wx.ready(function(){
    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    wx.onMenuShareTimeline({
      title: 'hello', // 分享标题
      link: "https://smartstudy.applinzi.com/sharefrom/timeline/page/234", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'http://media8.smartstudy.com/zhikewang/images/exams/toefl.jpg', // 分享图标
      success: function () {
      // 用户点击了分享后执行的回调函数
        console.log('share success')
      }
    });
    wx.onMenuShareAppMessage({
      title: 'hello', // 分享标题
      link: "https://smartstudy.applinzi.com/sharefrom/appmsg/page/123", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'http://media8.smartstudy.com/zhikewang/images/exams/toefl.jpg', // 分享图标
      success: function () {
      // 用户点击了分享后执行的回调函数
        alert('share success')
      },
      desc: 'desc', // 分享描述
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      });
  });
  // wx.onMenuShareAppMessage({
  //   title: 'hello', // 分享标题
  //   link: "https://smartstudy.applinzi.com/?from=abc", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  //   imgUrl: 'http://media8.smartstudy.com/zhikewang/images/exams/toefl.jpg', // 分享图标
  //   success: function () {
  //   // 用户点击了分享后执行的回调函数
  //     console.log('share success')
  //   }
  // });
}


  function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]);
      // If first entry with this name
      if (typeof query_string[key] === "undefined") {
        query_string[key] = decodeURIComponent(value);
        // If second entry with this name
      } else if (typeof query_string[key] === "string") {
        var arr = [query_string[key], decodeURIComponent(value)];
        query_string[key] = arr;
        // If third or later entry with this name
      } else {
        query_string[key].push(decodeURIComponent(value));
      }
    }
    return query_string;
  }
  
  log(v)