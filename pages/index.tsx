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

export default IndexPage;
