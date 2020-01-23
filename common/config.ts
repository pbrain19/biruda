export default {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  DATABASE_URL:
    process.env.DATABASE_URL ||
    'postgres://ozgknkxymsmihz:132bac14926e83ed9db1a5d80fba4216a5cd73c316a83746f069d1cda1a993c4@ec2-107-21-235-87.compute-1.amazonaws.com:5432/d7bt0archdinll',
  firebase_client: {
    apiKey: process.env.apiKey || 'AIzaSyBnxUH5YxaWs5CL061eEQqjUxy9R9lbkOs',
    authDomain: process.env.authDomain || 'crowdbuild-abe97.firebaseapp.com',
    databaseURL:
      process.env.databaseURL || 'https://crowdbuild-abe97.firebaseio.com',
    projectId: process.env.projectId || 'crowdbuild-abe97',
    storageBucket: process.env.storageBucket || 'crowdbuild-abe97.appspot.com',
    messagingSenderId: process.env.messagingSenderId || '1052679686592',
    appId: process.env.appId || '1:1052679686592:web:de12922e3d3a841b6a6025',
  },
  firebase_server: {
    type: 'service_account',
    project_id: 'crowdbuild-abe97',
    private_key_id: 'f3ed94b2525b009791483c9fd0021e9944f694b6',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC2ijut9GiqQUXB\nji6b+qRVVp8X+vFybYtGdEcJHhiVGMNzh76EofplInwGRfIVnm7OKCtRrwj2J/aJ\nKgg4sKhpUgQKTqOek8Ju4Uz6htiL+bWX9xCL5qVZGrFhqF/YgNmDAO3r41BxEPhW\na/bTGSLz0GZVB9A22FO1adkH5uK2Vjdr7TJeORGczjTVABHUHSY+ww5FUQcv0Xpf\nQPoxZYWG6OSZZ5KzXHEFYDZA4t+kwx+9dWs+5TQ8/nrBfx1ZaYBP5h3G+qXNcpM7\n/DHmzwzhrCIVqymV3PEYukaGE7p30mDo8ANLgFo1hHp7hy/vFq6+Yt+QHNHtGTXJ\nmbjw7Z3vAgMBAAECggEAHnUMJidMu3OupvAJWN9GQjL00rR9SuF6RqQqIhxSb7Y1\nDnbM1CaOuAc7+HP9Q5wu0tki+TsiXKgoW5SW0JaxUvlrUSjz5gazf3q6NGcBhMGC\nijugGCfA2RA6HphQfbhqEpC6IgzIpET3mrvi8DAWg+X23SMzm6MWvINPwiDFHTUW\n6gzeFqC1BWdc95ExYUs83HaDxV0qcE5BzmexRt5WA6ANZCahTaPR6AvFbi7ARZxU\ntGU9CvLUz78ZTo0HjEdZzxyxDfM+XpVIpbV3X/GJb2PtQhZObEBMYGeHM2jHDfMJ\nckq1At9CMQffUhXKhh8iHqkiHrOaI2Ui4O3L+VKZYQKBgQDyHCLy5RYg4KY90hRX\nWyCUoeJcoK8hTxyrD/e2bEgkXk2xyA7NRJA5bC+50Qin4SXuiQy/GRdembjCJFKA\nk4+2m62ZkvXFgncDcqExrgXv3DebAKFULIt1817hK2NqVqH7q1fj/Jh9dO2DgSyx\n8064HKWVmVSiWTW67eAOwJQiHwKBgQDBAzGyvNiYVQt3BlXIIh35BsfTbZgv3n1G\nsM4VSS+GngLcwQFd+RWBIrypDzsPCzbg40R3+8K+SI57QwKoTqrYvxhefxFkwbtQ\n+Y5i3c/wxq6AbuB6Tk72G5jJ+fpl7oZ9+niamcqY1HzUbJjMUakyE8rNX8mAKJzX\nooQmPcYqMQKBgAnO5/+NFlNopnN0skxDrdM3p7L284FW8iNf9zoVsup+Q4mDQE5C\ni9E3t8tAU6hxb5b1SGXpf0/ezGRZElqRH85XCjZhhMFmoqmqGCuqECWCd2I5KU/+\nqfuyS1K17kYdklxeuaXL0uWqOgEM16Gx6Kt+xZqE5q/ZC1syTdRrKtUjAoGAToBd\nE0RJl9NnIVbbRtXRePpwBacaccW9ECZS+0dT5B2aLmz1gGIRg/872krOi3TVMixd\nKauk7j2Wbb24c/ni9NrsL2rhCSjeZbXKWp26uEQmryfpdvUommJpByT72b9kxhI8\nQSzxwK0TxFYS428HMM3p+xPNYami+PUpaGBRm9ECgYAVmViOqvvuan93Nj1f8dJc\nN1RMB6rQMDS1o/AsE08GvuSUbtK2X+4YeRaiL1OOl9QHJj2F1xhM30cfS0dilgJp\nefiSfDil/qI+6yjcLIoH6CSqaziIeG77/Rr2Cvk532mFS1Qij+uGUSAqax5sDEbY\niLMflK+MnaKE+bpuTYUfCA==\n-----END PRIVATE KEY-----\n',
    client_email:
      'firebase-adminsdk-8scy8@crowdbuild-abe97.iam.gserviceaccount.com',
    client_id: '102894507676538759891',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-8scy8%40crowdbuild-abe97.iam.gserviceaccount.com',
  },
};
