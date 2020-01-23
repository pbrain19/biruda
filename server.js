const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const next = require('next');
const admin = require('firebase-admin');
const config = require('./credentials/config');
const redis = require('redis');

const RedisStore = require('connect-redis')(session);
const redisClient = redis.createClient(config.REDIS_URL);

const port = config.port;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const firebase = admin.initializeApp(
  {
    credential: admin.credential.cert(
      require('./common/firebaseServerCredentials')
    ),
  },
  'server'
);

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(
    session({
      secret: 'geheimnis',
      saveUninitialized: true,
      store: new RedisStore({ client: redisClient }),
      resave: false,
      rolling: true,
      // cookie: { maxAge: 604800000, httpOnly: true }, // week
    })
  );

  server.use((req, _, next) => {
    req.firebaseServer = firebase;
    next();
  });

  server.post('/api/login', (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const token = req.body.token;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(decodedToken => {
        req.session.decodedToken = decodedToken;
        return decodedToken;
      })
      .then(decodedToken => res.json({ status: true, decodedToken }))
      .catch(error => res.json({ error }));
  });

  server.post('/api/logout', (req, res) => {
    req.session.decodedToken = null;
    res.json({ status: true });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
