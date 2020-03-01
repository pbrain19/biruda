// @ts-ignore
module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  REDIS_URL:
    process.env.REDIS_URL ||
    'redis://h:p0f51bb4f5f81826ad572e2f2c241ef369b064632d3fa0bfc29e3433c3743ec02@ec2-3-214-235-220.compute-1.amazonaws.com:32749',
  DATABASE_URL:
    process.env.DATABASE_URL ||
    'postgres://ozgknkxymsmihz:132bac14926e83ed9db1a5d80fba4216a5cd73c316a83746f069d1cda1a993c4@ec2-107-21-235-87.compute-1.amazonaws.com:5432/d7bt0archdinll',
  FIREBASE_CLIENT: {
    apiKey: process.env.apiKey || 'AIzaSyBnxUH5YxaWs5CL061eEQqjUxy9R9lbkOs',
    authDomain: process.env.authDomain || 'crowdbuild-abe97.firebaseapp.com',
    databaseURL:
      process.env.databaseURL || 'https://crowdbuild-abe97.firebaseio.com',
    projectId: process.env.projectId || 'crowdbuild-abe97',
    storageBucket: process.env.storageBucket || 'crowdbuild-abe97.appspot.com',
    messagingSenderId: process.env.messagingSenderId || '1052679686592',
    appId: process.env.appId || '1:1052679686592:web:de12922e3d3a841b6a6025',
  },
};
