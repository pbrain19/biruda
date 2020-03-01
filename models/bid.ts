import * as Sequelize from 'sequelize';
import { Bid } from '../interfaces';

interface MyModel extends Sequelize.Model {
  readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
type MyModelStatic = typeof Sequelize.Model & {
  new(values?: object, options?: Sequelize.BuildOptions): MyModel & Bid;
};

export default (sequelize: Sequelize.Sequelize) => {
  const Bid = sequelize.define(
    'bid',
    {
      // attributes
      businessProfileId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      listingId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateSigned: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cost: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      timeCompletion: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      executionPlan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      executionPlanPdf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      // options
    }
  ) as MyModelStatic;

  return Bid;
};
