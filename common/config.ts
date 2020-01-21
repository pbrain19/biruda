export default {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  DATABASE_URL:
    process.env.DATABASE_URL ||
    'postgres://ozgknkxymsmihz:132bac14926e83ed9db1a5d80fba4216a5cd73c316a83746f069d1cda1a993c4@ec2-107-21-235-87.compute-1.amazonaws.com:5432/d7bt0archdinll',
  firebase: {
    client_email:
      'firebase-adminsdk-8scy8@crowdbuild-abe97.iam.gserviceaccount.com',
    client_id: '102894507676538759891',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    apiKey: 'AIzaSyBnxUH5YxaWs5CL061eEQqjUxy9R9lbkOs',
    authDomain: 'crowdbuild-abe97.firebaseapp.com',
    databaseURL: 'https://crowdbuild-abe97.firebaseio.com',
    projectId: 'crowdbuild-abe97',
    storageBucket: 'crowdbuild-abe97.appspot.com',
    messagingSenderId: '1052679686592',
    appId: '1:1052679686592:web:7054ca6b3be3d0cf6a6025',
  },
};
