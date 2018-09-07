const spawn = require("child_process").spawn

function getRecentList() {
  return new Promise(function (resolve, reject) {
    let list = [];
    const sentry_list = spawn('sentry-cli', ['releases', 'list'])
    sentry_list.stdout.on('data', (d) => {
      const lines = d.toString('utf8')
      .split('\n')
      .map(line => {
        const a = line.split('|');
        const releasesId = a[2] || '';
        return releasesId.trim();
      })
      .filter(a => a && a !== 'Version');
      list = list.concat(lines);
    })
    sentry_list.stderr.on('data', (d) => {
      reject('standard error output: \n' + d)
    })
    sentry_list.on('exit', (code, signal) => {
      resolve(list)
    })
  });
}

function deleteReleaseFiles(releaseId) {
  return new Promise(function (resolve, reject) {
    let result = '';
    const sentry_list = spawn('sentry-cli', ['releases', 'files', releaseId, 'delete'])
    sentry_list.stdout.on('data', (d) => {
      result += d;
    })
    sentry_list.stderr.on('data', (d) => {
      reject('standard error output: \n' + d)
    })
    sentry_list.on('exit', (code, signal) => {
      resolve(result)
    })
  });
}

function deleteRelease(releaseId) {
  return new Promise(function (resolve, reject) {
    let result = '';
    const sentry_list = spawn('sentry-cli', ['releases', 'delete', releaseId])
    sentry_list.stdout.on('data', (d) => {
      result += d;
    })
    sentry_list.stderr.on('data', (d) => {
      reject('standard error output: \n' + d)
    })
    sentry_list.on('exit', (code, signal) => {
      resolve(result)
    })
  });
}

!(async function () {
  const a = await getRecentList();
  a.forEach(async (releaseId, index) => {
    try {
      await deleteReleaseFiles(releaseId);
      console.log(releaseId)
    } catch (e) {
      console.log('fail', releaseId);
    }
  });
})()

