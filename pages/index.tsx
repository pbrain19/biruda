import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/Layout';
import { ContextProps } from '../common/context';
import { NextPage } from 'next';

const IndexPage: NextPage<ContextProps> = ({ User }: ContextProps) => {
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
        <h1>Hello Next.js {User && User.email} 👋</h1>
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
  const User: firebase.User =
    req && req.session ? req.session.decodedToken : null;

  return { User };
};

export default IndexPage;
