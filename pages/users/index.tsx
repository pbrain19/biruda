import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../../components/Layout';
import { User } from '../../interfaces';

type Props = {
  items: User[];
  pathname: string;
};

const WithInitialProps: NextPage<Props> = ({ pathname }) => (
  <Layout>
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getInitialProps()</code>.
    </p>
    <p>You are currently on: {pathname}</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default WithInitialProps;
