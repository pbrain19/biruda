import * as React from 'react';
import { NextPageContext } from 'next';

import { User } from '../../interfaces';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';
import { fetchWrapper } from '../../utils/fetch-wrapper';

type Props = {
  item?: User;
  errors?: string;
};

class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { id } = query;
      const item = await fetchWrapper(
        `/api/users/${Array.isArray(id) ? id[0] : id}`
      );
      return { item };
    } catch (err) {
      return { errors: err.message };
    }
  };

  render() {
    const { item, errors } = this.props;

    if (errors) {
      return (
        <Layout>
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout>
      );
    }

    return <Layout>{item && <ListDetail item={item} />}</Layout>;
  }
}

export default InitialPropsDetail;
