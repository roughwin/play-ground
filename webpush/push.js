const webpush = require('web-push');
 
// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BIXO626ttwQuaDj9XXDsNRrxupUAjcgMUBtvYgG4I1nSoRApXtHo2EYXNaSItVKyXBt2opD5URXgnRQow5ol_H8',
  privateKey: '',
};
 
// webpush.setGCMAPIKey('<Your GCM API Key Here>');
webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
 
// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/cbdnYa4kmF4:APA91bHT8t8woSRx37o8JFNR_dVtFW1QbJlaOs2PJnw-YTdfsxw0W1nxb7VnaUA0aKA14xzk3C2C63jQ5mD-_9b84m7Q2-cEuyNaIjZmFg-jrjvwQj35bE2Q48Tu6mA_CkJBk3EA_hCM',
  keys: {
    auth: 'ZztDygAIptEuL2BpPAMGEw',
    p256dh: 'BLaSt5OSbvUUixU0nmL3I_T2QGj4CR5nazl2PlibkG7zLSs7K0yyt5jvtQM9cSndOcwIPK-BW0yE2xminUlxHRE'
  }
};
 console.log('abc')
webpush.sendNotification(pushSubscription, 'Your Push Payload Text');