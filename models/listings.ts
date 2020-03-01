import * as Sequelize from 'sequelize';
import { Listings } from '../interfaces';

interface MyModel extends Sequelize.Model {
  readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
type MyModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): MyModel & Listings;
};

export default (sequelize: Sequelize.Sequelize) => {
  const Listing = sequelize.define(
    'listing',
    {
      // attributes
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      totalPrice: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      estimatedConstructionTime: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      authorId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prospectus: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      commitment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pdfProposal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      summary: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      winningBid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      // options
    }
  ) as MyModelStatic;

  return Listing;
};
