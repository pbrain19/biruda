import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/Layout';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>CityShaper</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </Layout>
    </React.Fragment>
  );
};

IndexPage.getInitialProps = async ({ req }: any) => {
  const user = req && req.session ? req.session.decodedToken : null;
  // don't fetch anything from firebase if the user is not found
  // const snap = user && await req.firebaseServer.database().ref('messages').once('value')
  // const messages = snap && snap.val()
  const messages = null;
  return { user, messages };
};

export default IndexPage;
