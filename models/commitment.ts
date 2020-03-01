import * as Sequelize from 'sequelize';
import { Commitment } from '../interfaces';

interface MyModel extends Sequelize.Model {
  readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
type MyModelStatic = typeof Sequelize.Model & {
  new(values?: object, options?: Sequelize.BuildOptions): MyModel & Commitment;
};

export default (sequelize: Sequelize.Sequelize) => {
  const Commitment = sequelize.define(
    'commitment',
    {
      // attributes
      userId: {
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
      option: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      // options
    }
  ) as MyModelStatic;

  return Commitment;
};
