import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import FileStore from 'session-file-store';
import next from 'next';
import admin from 'firebase-admin';
import { ParsedRequest } from './interfaces/index';

const FileStoreInstance = FileStore(session);

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const firebase = admin.initializeApp(
  {
    credential: admin.credential.cert(require('./credentials/server')),
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
      store: new FileStoreInstance({ secret: 'geheimnis' }),
      resave: false,
      rolling: true,
      // cookie: { maxAge: 604800000, httpOnly: true }, // week
    })
  );

  server.use((req: ParsedRequest, _, next) => {
    req.firebaseServer = firebase;
    next();
  });

  server.post('/api/login', (req: ParsedRequest, res) => {
    if (!req.body) return res.sendStatus(400);

    const token = req.body.token;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(decodedToken => {
        req.session!.decodedToken = decodedToken;
        return decodedToken;
      })
      .then(decodedToken => res.json({ status: true, decodedToken }))
      .catch(error => res.json({ error }));
  });

  server.post('/api/logout', (req: ParsedRequest, res) => {
    req.session!.decodedToken = null;
    res.json({ status: true });
  });

  server.get('*', (req: ParsedRequest, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
